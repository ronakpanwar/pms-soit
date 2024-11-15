const express = require('express');
const { register, loginUser, addSudent, addAdmin, logOut, deleteUser, getAllAdmins, getAllStudent, updateProfile, updateImage } = require('../controllers/user.controller');
const { Authentication, isAutherized } = require('../middleweres/isAutherized');
const {singleUpload} = require('../middleweres/multer');

const router = express.Router();

router.post('/register'  , register);
router.post('/login' , loginUser);
router.post('/logout' , logOut)
router.post('/add/student' ,Authentication , isAutherized(['admin']), addSudent)
router.post('/add/admin' ,Authentication , isAutherized(['admin']), addAdmin)
router.post('/delete/:id' ,Authentication , isAutherized(['admin']), deleteUser)
router.get('/get/admin' ,Authentication , isAutherized(['admin']), getAllAdmins)
router.get('/get/student' ,Authentication , isAutherized(['admin']), getAllStudent)
router.post('/update/student' ,Authentication , isAutherized(['student']),singleUpload, updateProfile)
router.post('/update/student/image' ,Authentication , isAutherized(['student']),singleUpload, updateImage)

module.exports = router