import userModel from '../models/UserModel.js'
import bcrypt from 'bcryptjs'

async function validateCredentials (emailUser, password) {
  const user = await userModel.findOne({ where: { email: emailUser } })
  if (!user) return false
  const validaPassword = bcrypt.compare(password, user.password)
  if (!validaPassword) return false
  return user.dataValues
}
export default validateCredentials
