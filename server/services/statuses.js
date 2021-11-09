const { Status } = require('../database/models')

const statusesServices = {}

statusesServices.getAllStatuses = async () => {
  const statuses = await Status.findAll({
    include: [
      { association: 'todos' }
    ]
  })
  return statuses
}

module.exports = statusesServices