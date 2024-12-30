export const handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Validate required fields
    const requiredFields = ['firmName', 'email', 'phone'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          message: `Missing required fields: ${missingFields.join(', ')}`
        }),
      };
    }

    // Log the received data for debugging
    console.log('Received form data:', data);

    // Here we'll just return success for now
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: 'Site request received successfully',
        data: {
          ...data,
          url: `https://${data.urlPrefix}.netlify.app`,
          adminUrl: `https://app.netlify.com/sites/${data.urlPrefix}`
        }
      }),
    };
  } catch (error) {
    console.error('Error processing request:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        message: 'Internal server error', 
        error: error.message 
      }),
    };
  }
}; 