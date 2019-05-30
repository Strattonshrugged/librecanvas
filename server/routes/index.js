import express from 'express';
var router = express.Router();

import jwt from 'express-jwt';

var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlAdmin = require('../controllers/admin');
var ctrlCourses = require('../controllers/courses');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// admin
router.get('/users', auth, ctrlAdmin.getAllUsers);
router.get('/users/:id', auth, ctrlAdmin.getUserById);
router.post('/users/edit/:id', auth, ctrlAdmin.editUser);
router.get('/users/delete/:id', auth, ctrlAdmin.deleteUser);

// courses
router.post('/users/create-course', auth, ctrlCourses.addCourse);
// router.get('/courses/get-courses', auth, ctrlCourses.getCourses);
router.get('/courses/get-instructed-courses', auth, ctrlCourses.getInstructedCourses);
router.get('/courses/get-enrolled-courses', auth, ctrlCourses.getEnrolledCourses);
router.get('/courses/get-allOther-courses', auth, ctrlCourses.getAllOtherCourses);

export default router;

