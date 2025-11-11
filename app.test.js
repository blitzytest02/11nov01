// Comprehensive test suite for Express application
// Validates both endpoints and error handling

const request = require('supertest');
const app = require('./app');

describe('Node.js Server with Express', () => {
  // Test first endpoint - Hello world
  describe('GET /', () => {
    it('should return "Hello world" with status 200', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Hello world');
    });
  });

  // Test second endpoint - Good evening
  describe('GET /evening', () => {
    it('should return "Good evening" with status 200', async () => {
      const response = await request(app).get('/evening');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Good evening');
    });
  });

  // Test error handling for undefined routes
  describe('GET /nonexistent', () => {
    it('should return 404 for undefined routes', async () => {
      const response = await request(app).get('/nonexistent');
      expect(response.status).toBe(404);
    });
  });
});
