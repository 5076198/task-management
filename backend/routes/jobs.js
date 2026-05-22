const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// GET all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ADD new job
router.post('/', async (req, res) => {
  try {
    const job = new Job({
      title: req.body.title,
      company: req.body.company,
      location: req.body.location
    });

    const savedJob = await job.save();
    res.status(201).json(savedJob);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;