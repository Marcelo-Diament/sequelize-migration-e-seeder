const { getAllTodos, getAllTodosByUserId, getTodoById, updateTodo, createTodo, destroyTodo } = require('../services/todos')
const { getAllStatuses } = require('../services/statuses')
const { getAllUsers } = require('../services/users')

const controller = {
  index: async (req, res, next) => {
    const { userId } = req.query
    const todos = userId ? await getAllTodosByUserId(userId) : await getAllTodos()

    res.render('todos', {
      title: 'To Dos',
      todos
    })
  },
  show: async (req, res, next) => {
    const { id } = req.params

    if (!id) {
      res.status(400).send('Ops... não encontramos o seu to do')
    }

    const todo = await getTodoById(id)
    res.render('todos', {
      title: `To Do #${id}`,
      todo
    })
  },
  edit: async (req, res, next) => {
    const { id } = req.params

    if (!id) {
      res.status(400).send('Ops... não encontramos o seu to do')
    }

    const todo = await getTodoById(id)
    const statuses = await getAllStatuses()
    const users = await getAllUsers()

    res.render('todo', {
      title: `To Do #${id}`,
      todo,
      statuses,
      users
    })
  },
  update: async (req, res, next) => {
    const { id } = req.params

    if (!id) {
      res.status(400).send('Ops... não encontramos o seu to do')
    }

    const update = await updateTodo(id, req.body)

    if (update) {
      const todos = await getAllTodos()
      res.render('todos', {
        title: `To Dos`,
        todos
      })
    } else {
      res.status(500).send('Ops... deu ruim...')
    }
  },
  add: async (req, res, next) => {
    const statuses = await getAllStatuses()
    const users = await getAllUsers()

    res.render('todo', {
      title: `Novo To Do`,
      statuses,
      users
    })
  },
  create: async (req, res, next) => {
    const create = await createTodo(req.body)

    if (create) {
      res.redirect('../todos')
    } else {
      res.status(500).send('Ops... deu ruim...')
    }
  },
  destroy: async (req, res, next) => {
    const { id } = req.params
    const destroy = await destroyTodo(id)

    if (destroy) {
      res.redirect('../../todos')
    } else {
      res.status(500).send('Ops... deu ruim...')
    }
  }
}

module.exports = controller