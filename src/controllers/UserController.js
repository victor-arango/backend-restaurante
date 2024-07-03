import userModel from '../models/UserModel.js'
import bcrypt from 'bcryptjs'
import validateCredentials from '../middleware/validateCredentialsMiddleware.js'
import jwtFunctions from '../middleware/jwtMiddleware.js'

const UserController = {
  async register (req, res, next) {
    try {
      const hasPassword = bcrypt.hashSync(req.body.password, 8)
      const user = await userModel.create({
        name: req.body.name,
        email: req.body.email,
        password: hasPassword
      })
      return res.status(201).json({
        success: true,
        message: 'registro exitoso ',
        data: user
      })
    } catch (error) {
      console.log(error)
      return res.status(501).json({
        success: false,
        message: 'No se puede registar el usuario'
      })
    }
  },

  async getUsers (req, res, next) {
    try {
      const user = await userModel.findAll()
      return res.status(201).json({
        success: true,
        message: 'Recuperación de usuarios Exitosa',
        data: user
      })
    } catch (error) {
      console.log(error)
      return res.status(501).json({
        success: false,
        message: 'Error al recurperar los usuarios'
      })
    }
  },

  async getUserByEmail (req, res, next) {
    try {
      const emailUser = req.body.email
      const user = await userModel.findOne({ where: { email: emailUser } })
      if (user == null) {
        return res.status(400).json({
          success: false,
          message: 'usuario No encontrado',
          data: user
        })
      } else {
        return res.status(201).json({
          success: true,
          message: 'usuario encontrado',
          data: user
        })
      }
    } catch (error) {
      return res.status(501).json({
        success: false,
        message: 'No se encontro el usuario en la base de datos'
      })
    }
  },

  async userLogin (req, res, next) {
    try {
      const email = req.body.email
      const password = req.body.password
      const validation = await validateCredentials(email, password)
      if (!validation) return res.status(400).json({ success: false, message: 'Email o password invalidos' })
      const userToken = jwtFunctions.generaToken(validation.user_id)
      await userModel.update({ session_token: userToken }, { where: { user_id: validation.user_id } })
      if (!userToken) {
        return res.status(400).json({
          success: false,
          message: 'Error al logear el usuario'
        })
      } else {
        return res.status(201).json({
          success: true,
          message: 'Iniciando sesión...'
        })
      }
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        success: false,
        message: 'Error al iniciar sesión'
      })
    }
  }

}

export default UserController
