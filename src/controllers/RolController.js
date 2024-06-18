import rolesModel from '../models/RolModel.js'

const rolesController = {
  async getAll (req, res, next) {
    try {
      const data = await rolesModel.getAll()
      return res.status(201).json(data)
    } catch (error) {
      return res.status(501).json({
        success: false,
        message: 'Error al obtener los roles'
      })
    }
  }

}

export default rolesController
