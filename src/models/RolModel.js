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
  timestamps: true,
  tableName: 'roles'
})

export default rolesModel
