const { MongoClient } = require('mongodb');
const NetlifyAPI = require('netlify');

const client = new MongoClient(process.env.MONGODB_URI);
const netlify = new NetlifyAPI(process.env.NETLIFY_AUTH_TOKEN);

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    // Parse the incoming request
    const data = JSON.parse(event.body);
    
    // Connect to MongoDB
    await client.connect();
    const collection = client.db('legal-sites').collection('site-configs');
    
    // Store the configuration
    const result = await collection.insertOne({
      ...data,
      createdAt: new Date(),
      status: 'pending'
    });

    // Create new site on Netlify
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
          SITE_CONFIG_ID: result.insertedId.toString()
        }
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Site creation initiated',
        siteUrl: site.url,
        configId: result.insertedId
      })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error', error: error.message })
    };
  } finally {
    await client.close();
  }
}; 