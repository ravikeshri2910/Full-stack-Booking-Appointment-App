const path = require('path');

const express = require('express');

const submitController = require('../controler/submit');

const router = express.Router();


router.post('/user/add-user',submitController.postAddBooking);


router.get('/user/add-user',submitController.getBooking);


router.get('/user/add-user/:id',submitController.deleteBooking);


module.exports = router;