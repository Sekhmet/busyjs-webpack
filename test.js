var busy = require('busyjs');

// Init WebSocket client
var client = new busy.Client('wss://gtg.steem.house:8090');

// Get accounts
client.call('get_accounts', ['fabien'], function (err, result) {
    console.log(err, result);
});