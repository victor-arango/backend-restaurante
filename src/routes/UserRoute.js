import UserController from '../controllers/UserController.js'

const user = (app) => {
  app.post('/register', UserController.register)
}

export default user
