const express = require('express');
const { Authentication, isAutherized } = require('../middleweres/isAutherized');
const { createJob, getCompanyJobs, getAllJobs } = require('../controllers/job.controller');

const router = express.Router();

router.post('/postjob' , Authentication , createJob)
router.get('/company/jobs'  , Authentication , getCompanyJobs)
router.get('/alljobs' , Authentication , isAutherized(['admin','student']) , getAllJobs)

module.exports = router