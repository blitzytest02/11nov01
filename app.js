// Main Express.js application with multiple endpoints
// This file addresses both requirements: Express integration + second endpoint

const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

// First endpoint - Returns "Hello world"
// Maintains compatibility with original tutorial requirement
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Second endpoint - Returns "Good evening"
// New endpoint demonstrating Express routing capabilities
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Conditional server start - allows module export for testing
// Only starts server when file is executed directly, not when imported
if (require.main === module) {
  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

// Export app for testing purposes
module.exports = app;
