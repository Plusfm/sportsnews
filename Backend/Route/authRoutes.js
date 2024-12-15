// const express =require('express')
// const router= express.Router()
// const {loginpost} = require('../Controller/loginController')
// const {validateUser} = require('../Middlewares/validationmiddleware')

// router.post('/login',loginpost,validateUser )
// // router.get('/contact' , contactController.contacttget)
// // router.get('/contact/:id', contactController.contactgetid)
// // router.delete('/content/:id', contactController.contactdelete)



// module.exports = router;

const express = require('express');
const { body } = require('express-validator');
const { signup, login, getDashboard } = require('../Controller/authController');
const authMiddleware = require('../Middlewares/authMiddleware');

const router = express.Router();

// Signup route
router.post(
  '/signup',
  [
    body('name', 'Name is required').notEmpty(),
    body('email', 'Please provide a valid email').isEmail(),
    body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  signup
);

// Login route
router.post(
  '/login',
  [
    body('email', 'Please provide a valid email').isEmail(),
    body('password', 'Password is required').notEmpty(),
  ],
  login
);

// dashboard route
router.get('/dashboard', authMiddleware, getDashboard);

module.exports = router;
