import { sequelize } from '../middleware/config.js'
import { DataTypes } from 'sequelize'

const rolesModel = sequelize.define('roles', {
  role_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  role_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'roles'
})

rolesModel.getAll = async () => {
  try {
    const roles = await rolesModel.findAll()
    return roles
  } catch (error) {
    console.error('Error obteniendo los roles:', error)
    throw error
  }
}

export default rolesModel
