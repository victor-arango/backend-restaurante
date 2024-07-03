import UserController from '../controllers/UserController.js'

const user = (app) => {
  app.post('/register', UserController.register)
  app.get('/users', UserController.getUsers)
  app.get('/user', UserController.getUserByEmail)
  app.get('/login', UserController.userLogin)
}

export default user
