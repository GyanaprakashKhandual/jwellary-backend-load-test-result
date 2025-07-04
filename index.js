const express = require('express');
const cors = require('cors');
const app = express();
const testResults = require('./test/result.json');
const userData = require('./user/user.json');

app.use(cors({
  origin: ['https://gyanaprakashkhandual.github.io', 'http://localhost:3000/', 'http://127.0.0.1:5500'],
  credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
} 
);

app.get('/api/load-test-result', (req, res) => {
  res.json(testResults);
});

app.get('/api/user-data', (req, res) => {
  res.json(userData);
})

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});