import rolesController from '../controllers/rolController.js'

const rol = (app) => {
  app.get('/roles', rolesController.getAll)
}

export default rol
