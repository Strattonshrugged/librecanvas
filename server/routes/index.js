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

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// admin
router.get('/users', auth, ctrlAdmin.getAllUsers);

export default router;