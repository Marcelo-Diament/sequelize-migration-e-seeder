const express = require('express'),
  router = express.Router(),
  todosController = require('../controllers/todos.js')

router.get('/', todosController.index);

module.exports = router;
