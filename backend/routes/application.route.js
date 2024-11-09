const express = require('express');
const { Authentication, isAutherized } = require('../middleweres/isAutherized');
const { applyJob, getAllAppliedJob, getApplications, updateStatus } = require('../controllers/application.controller');

const router = express.Router();

router.post('/apply/:id' , Authentication ,isAutherized(['student']), applyJob)
router.get('/applied/jobs' , Authentication , isAutherized(['student']) , getAllAppliedJob);
router.get('/all/:id' , Authentication , getApplications);
router.post('/status/:id' , Authentication , updateStatus)

module.exports = router