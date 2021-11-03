const controller = {
  index: (req, res, next) => {
    res.render('users', {
      title: 'Users'
    })
  }
}

module.exports = controller