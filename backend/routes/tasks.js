const express = require('express');
const router = express.Router();

let tasks = [];

// GET all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// ADD task
router.post('/', (req, res) => {
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    completed: false
  };

  tasks.push(newTask);

  res.json(newTask);
});

// DELETE task
router.delete('/:id', (req, res) => {
  tasks = tasks.filter(task => task.id != req.params.id);

  res.json({ message: 'Task deleted' });
});

module.exports = router;