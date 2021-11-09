const { getAllUsers } = require('../services/users')

const controller = {
  index: async (req, res, next) => {
    const users = await getAllUsers()
    res.render('users', {
      title: 'Users',
      users
    })
  }
}

module.exports = controller