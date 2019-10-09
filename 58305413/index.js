const https = require('https');
const httpProxy = require('http-proxy');

//
// Create a HTTP Proxy server with a HTTPS target
//
httpProxy.createProxyServer({
  target: 'https://google.com',
  agent  : https.globalAgent,
  secure : false,
  headers: {
    host: 'google.com'
  }
}).listen(8011);