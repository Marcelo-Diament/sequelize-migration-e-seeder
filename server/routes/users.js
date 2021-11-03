const express = require('express'),
  router = express.Router(),
  usersController = require('../controllers/users')

router.get('/', usersController.index);

module.exports = router;
