import { sequelize } from '../middleware/config.js'
import { DataTypes, literal } from 'sequelize'

const userModel = sequelize.define('users', {
  user_id: {
    type: DataTypes.UUID,
    defaultValue: literal('gen_random_uuid()'),
    primaryKey: true
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
    defaultValue: 2,
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

export default userModel
