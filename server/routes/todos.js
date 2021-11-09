const express = require('express'),
  router = express.Router(),
  todosController = require('../controllers/todos.js')

  router.get('/new', todosController.add);
  router.post('/new', todosController.create);
  router.post('/:id/delete', todosController.destroy);
  router.get('/:id/edit', todosController.edit);
  router.post('/:id/edit', todosController.update);
  router.get('/:id', todosController.show);
  router.get('/', todosController.index);
  
module.exports = router;
