const express = require('express');
const router= express.Router();

const {signup , login,forgotpass,update,addthis} = require('./controller');
router.route('/login').post( login);
router.route('/signup').post( signup);
router.route('/forgotpass').post(forgotpass)
router.route('/changepass/:id').post(update)
router.route('/addthis').post(addthis)
module.exports = router;