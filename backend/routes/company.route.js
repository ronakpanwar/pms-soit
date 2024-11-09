const express = require('express');
const { Authentication, isAutherized } = require('../middleweres/isAutherized');
const { createCompany,  loginCompany, logOutCompany, updateCompany, deleteCompany } = require('../controllers/company.controller');


const router = express.Router();

router.post('/create' , Authentication , isAutherized(['admin']) , createCompany)
router.post('/login' , loginCompany)
router.post('/logout' , logOutCompany)
router.post('/update' , Authentication , updateCompany)
router.post('/delete/:id' , Authentication , isAutherized(['admin']) , deleteCompany)


module.exports = router