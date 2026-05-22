const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
  return res.status(200).send('Backend Working Successfully');
});

// API Route
app.get('/api/tasks', (req, res) => {
  return res.status(200).json([
    {
      id: 1,
      title: 'Sample Task'
    }
  ]);
});

const PORT = process.env.PORT || 8080;

// IMPORTANT
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});