const express = require('express');
const { Authentication, isAutherized } = require('../middleweres/isAutherized');
const { createCompany,  loginCompany, logOutCompany, updateCompany, deleteCompany, getAllCompnys } = require('../controllers/company.controller');
const { singleUpload } = require('../middleweres/multer');


const router = express.Router();


router.post('/create' , Authentication , isAutherized(['admin']) , createCompany)
router.get('/get/all' , Authentication , isAutherized(['admin']) , getAllCompnys)
router.post('/login' , loginCompany)
router.post('/logout' , logOutCompany)
router.post('/update' , Authentication ,singleUpload, updateCompany)
router.post('/delete/:id' , Authentication , isAutherized(['admin']) , deleteCompany)


module.exports = router