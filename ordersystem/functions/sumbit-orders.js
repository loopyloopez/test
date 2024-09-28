let orders = [];  // Temporary in-memory storage (replace with a database for production)

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    const newOrder = JSON.parse(event.body);
    orders.push(newOrder);  // Store the order

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Order received!', newOrder }),
    };
};
