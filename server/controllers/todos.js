const controller = {
  index: (req, res, next) => {
    res.render('todos', {
      title: 'To Dos'
    })
  }
}

module.exports = controller