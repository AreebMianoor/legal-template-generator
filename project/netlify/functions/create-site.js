import { MongoClient } from 'mongodb';
import * as Netlify from 'netlify';

export const handler = async (event, context) => {
  console.log('Function called with event:', {
    method: event.httpMethod,
    path: event.path,
    headers: event.headers
  });

  const client = new MongoClient(process.env.MONGODB_URI);
  
  if (event.httpMethod !== 'POST') {
    console.log('Invalid method:', event.httpMethod);
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    // Parse the incoming request
    console.log('Raw request body:', event.body);
    const data = JSON.parse(event.body);
    console.log('Parsed data:', data);
    
    // Validate required fields
    const requiredFields = ['firmName', 'urlPrefix', 'email', 'phone', 'address'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      console.log('Missing fields:', missingFields);
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Missing required fields: ${missingFields.join(', ')}`
        })
      };
    }

    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB');
    
    const collection = client.db('legal-sites').collection('site-configs');
    
    // Store the configuration
    console.log('Storing configuration in MongoDB...');
    const result = await collection.insertOne({
      ...data,
      createdAt: new Date(),
      status: 'pending'
    });
    console.log('Configuration stored with ID:', result.insertedId);

    // Initialize Netlify client
    console.log('Initializing Netlify client...');
    const netlify = new Netlify.default(process.env.NETLIFY_AUTH_TOKEN);
    console.log('Netlify client initialized');

    // Create new site on Netlify
    console.log('Creating Netlify site with config:', {
      name: data.urlPrefix,
      repo: process.env.TEMPLATE_REPO
    });
    
    const site = await netlify.createSite({
      name: data.urlPrefix,
      custom_domain: `${data.urlPrefix}.netlify.app`,
      repo: {
        provider: 'github',
        repo: process.env.TEMPLATE_REPO,
        private: true,
        branch: 'main'
      },
      build_settings: {
        env: {
          SITE_CONFIG_ID: result.insertedId.toString(),
          FIRM_NAME: data.firmName,
          PRIMARY_COLOR: data.primaryColor
        }
      }
    });
    console.log('Netlify site created:', site);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Site creation initiated',
        siteUrl: site.url,
        configId: result.insertedId
      })
    };
  } catch (error) {
    console.error('Detailed error:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    
    // Handle specific error types
    if (error.name === 'SyntaxError') {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid request body' })
      };
    }
    
    if (error.code === 'MONGODB_CONNECTION_ERROR') {
      return {
        statusCode: 503,
        body: JSON.stringify({ message: 'Database connection error' })
      };
    }
    
    if (error.status === 401) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Netlify authentication failed' })
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Internal server error',
        error: error.message,
        details: error.stack
      })
    };
  } finally {
    if (client) {
      await client.close();
    }
  }
}; 