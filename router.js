const express = require('express');
const router= express.Router();

const {signup , login,forgotpass,update} = require('./controller');
router.route('/login').post( login);
router.route('/signup').post( signup);
router.route('/forgotpass').post(forgotpass)
router.route('/changepass/:id').post(update)
module.exports = router;