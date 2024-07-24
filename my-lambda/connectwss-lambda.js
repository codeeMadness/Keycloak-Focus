const WebSocket = require('ws');

exports.handler = async (event) => {
    const url = 'ws://localhost:3000/websocket'; // Replace with your WebSocket API URL
    const ws = new WebSocket(url);

    ws.on('open', function open() {
        console.log('Connected to WebSocket');
        ws.send(JSON.stringify({
            "msg": "connect",
            "version": "1",
            "support": ["1"]
        }));
    });

    ws.on('message', function incoming(data) {
        console.log('Received message:', data);
    });

    // ws.on('close', function close() {
    //     console.log('Disconnected from WebSocket');
    // });

    // ws.on('error', function error(err) {
    //     console.error('WebSocket error:', err);
    // });

    return {
        statusCode: 200,
        body: JSON.stringify('Message sent to WebSocket API'),
    };
};
