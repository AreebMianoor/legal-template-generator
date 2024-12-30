import { MongoClient } from 'mongodb';

export const handler = async (event, context) => {
  const client = new MongoClient(process.env.MONGODB_URI);
  
  try {
    await client.connect();
    await client.db('legal-sites').command({ ping: 1 });
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully connected to MongoDB!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Connection failed', error: error.message })
    };
  } finally {
    await client.close();
  }
}; 