const express = require('express')
const router = express.Router();
const { checkSchema, body } = require('express-validator');
const authController = require('../controllers/authController');
const User = require('../models/user');

router.post(
    '/',
    checkSchema({
      firstName: {
        trim: true,
        notEmpty: true,
        errorMessage: 'First name is required',
      },
      lastName: {
        trim: true,
        notEmpty: true,
        errorMessage: 'Last name is required',
      },
      gender:{
        trim: true,
        notEmpty: true,
        errorMessage: 'Gender Field is required',
      },
      password: {
        notEmpty: true,
        isLength: { options: { min: 9 } },
        errorMessage: 'Please provide a secure password',
      }
    }),
    [
        body('email')
        .isEmail()
        .withMessage('Please enter a valid email.')
        .custom((value) => {
        return User.findOne({ email: value }).then(userDoc => {
            if (userDoc) {
            return Promise.reject(
                'E-Mail aldready exists'
            );
            }
        });
        })
        .normalizeEmail()
    ],
    authController.register
);

module.exports = router;
