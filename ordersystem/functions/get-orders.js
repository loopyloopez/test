exports.handler = async function(event, context) {
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify(orders),  // Return stored orders
    };
};
