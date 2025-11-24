/**
 * Commercetools Connect Connector
 * My Commercetools Connect Connector
 */

interface ConnectorEvent {
  action: string;
  resource?: any;
}

interface ConnectorResponse {
  statusCode: number;
  body: string;
}

export const handler = async (event: ConnectorEvent): Promise<ConnectorResponse> => {
  console.log('Connector event received:', JSON.stringify(event, null, 2));
  
  try {
    // Add your connector logic here
    const result = {
      message: 'Connector executed successfully',
      action: event.action,
      timestamp: new Date().toISOString()
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    console.error('Connector error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
};

// For local testing
if (require.main === module) {
  handler({ action: 'test' })
    .then(response => console.log('Response:', response))
    .catch(error => console.error('Error:', error));
}
