// OPTIONAL: Basic Node.js HTTP server for educational comparison
// This demonstrates the baseline approach before Express.js enhancement

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Create server with single endpoint returning "Hello world"
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world');
});

// Start server and listen on specified port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
