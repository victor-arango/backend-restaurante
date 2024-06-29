import rolesModel from '../models/RolModel.js'

const rolesController = {
  async getAll (req, res, next) {
    const roles = await rolesModel.findAll()
    res.json({ roles })
  },

  async getRoleById (req, res, next) {
    const id = req.params.id
    const role = await rolesModel.findByPk(id)
    if (!role) { res.json({ msg: `No existe el role con id ${id}` }) }
    res.json({ role })
  }

}

export default rolesController
