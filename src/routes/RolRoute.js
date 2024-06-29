import rolesController from '../controllers/rolController.js'

const rol = (app) => {
  app.get('/roles', rolesController.getAll)
  app.get('/roles/:id', rolesController.getRoleById)
}

export default rol
