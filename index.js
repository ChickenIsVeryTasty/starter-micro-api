var host = process.env.PORT ? '0.0.0.0' : '127.0.0.1';
var port = process.env.PORT || 8080;
 
var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins 
    requireHeader: [],
    removeHeaders: [],
    setHeaders: {"referer": "https://revisionvillage.com"}
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
