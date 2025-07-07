const express = require('express');
const cors = require('cors');
const app = express();
const testResults = require('./test/result.json');
const userData = require('./user/user.json');

// Allow only specific origins
const allowedOrigins = ['http://localhost:3000', 'https://next-load-dashboard.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/load-test-result', (req, res) => {
  res.json(testResults);
});

app.get('/api/user-data', (req, res) => {
  res.json(userData);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
