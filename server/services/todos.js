const { Todo } = require('../database/models')

const todosServices = {}

todosServices.getAllTodos = async () => {
  const todos = await Todo.findAll({
    include: [
      { association: 'user' },
      { association: 'status' }
    ]
  })
  return todos
}

todosServices.getAllTodosByUserId = async userId => {
  const todos = await Todo.findAll({
    where: {
      userId
    },
    include: [
      { association: 'user' },
      { association: 'status' }
    ]
  })
  return todos
}

todosServices.getTodoById = async id => {
  const todo = await Todo.findByPk(id, {
    include: [
      { association: 'user' },
      { association: 'status' }
    ]
  })
  return todo
}

todosServices.updateTodo = async (id, todo) => {
  const updated = await Todo.update({ ...todo }, {
    where: { id }
  })
  return updated
}

todosServices.createTodo = async todo => {
  const created = await Todo.create({ ...todo })
  return created
}

todosServices.destroyTodo = async id => {
  return await Todo.destroy({ where: { id } })
}

module.exports = todosServices