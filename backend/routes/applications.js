const express = require('express');
const { body } = require('express-validator');
const { 
  applyToJob, 
  getMyApplications, 
  getJobApplications, 
  updateApplicationStatus 
} = require('../controllers/applicationController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.post('/jobs/:jobId/apply', protect, authorize('jobseeker'), [
  body('coverLetter').trim().notEmpty().withMessage('Cover letter is required')
], applyToJob);

router.get('/my-applications', protect, authorize('jobseeker'), getMyApplications);
router.get('/jobs/:jobId', protect, authorize('employer', 'admin'), getJobApplications);
router.put('/:id/status', protect, authorize('employer', 'admin'), [
  body('status').isIn(['pending', 'reviewed', 'shortlisted', 'rejected', 'hired'])
], updateApplicationStatus);

module.exports = router;
