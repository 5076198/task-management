// routes/tasks.js

const express = require('express');
const router = express.Router();

// GET all tasks
router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Complete Project',
      status: 'Pending'
    },
    {
      id: 2,
      title: 'Deploy on Railway',
      status: 'Done'
    }
  ]);
});

// POST task
router.post('/', (req, res) => {
  const newTask = req.body;

  res.json({
    message: 'Task Added Successfully',
    task: newTask
  });
});

module.exports = router;