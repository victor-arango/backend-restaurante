import usersModel from '../models/UserModel.js'
import bcrypt from 'bcryptjs'

const UsersController = {
  async register (req, res, next) {
    try {
      const data = await usersModel.register({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
      })
      console.log(data)
      return res.status(201).json(data)
    } catch (error) {
      return res.status(501).json({
        success: false,
        message: 'No se puede registar el usuario'
      })
    }
  }

}

export default UsersController
