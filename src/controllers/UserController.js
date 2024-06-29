import userModel from '../models/UserModel.js'
import bcrypt from 'bcryptjs'

const UserController = {
  async register (req, res, next) {
    try {
      const user = req.body.name
      console.log(user)
      try {
        console.log(user)
      } catch (error) {
        console.log(error)
        res.status(500).json({
          success: false,
          message: 'Error al insertar el usuario'
        })
      }
    } catch (error) {
      console.log(error)
      return res.status(501).json({
        success: false,
        message: 'No se puede registar el usuario'
      })
    }
  }

}

export default UserController

// const user = await userModel.create({
//   name: req.params.name,
//   email: req.params.email,
//   password: bcrypt.hashSync(req.params.password, 8)
// })
// return res.status(201).json({
//   success: true,
//   message: 'registro exitoso ',
//   data: user
// })
