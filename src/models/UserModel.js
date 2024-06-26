import { sequelize } from '../middleware/config.js'
import { DataTypes } from 'sequelize'
import { Role } from '../models/RolModel.js'

const usersModel = sequelize.define('users', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false

  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    references: {
      model: 'roles',
      key: 'role_id'
    }
  },
  session_token: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'users'
})

usersModel.belongsTo(Role, { foreignKey: 'role_id' })

usersModel.register = async (user) => {
  try {
    const user = await usersModel.create()
    return user
  } catch (error) {
    console.error('Error al registrar el usuario:', error)
    throw error
  }
}

export default usersModel
