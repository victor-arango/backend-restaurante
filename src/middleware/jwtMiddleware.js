import jwt from 'jsonwebtoken'
import 'dotenv/config'

function verifyToken (req, res, next) {
  const token = req.headers.authorization
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Token no valido'
    })
  }
  jwt.verify(token, process.env.SECRETKEY, (error, decoded) => {
    if (error) {
      return res.status(403).json({
        success: false,
        message: 'Token no valido o expirado'
      })
    }
    req.user_id = decoded.user_id
    next()
  })
}

function generaToken (id) {
  const userID = id
  const token = jwt.sign(
    { id: userID.toString() },
    process.env.SECRETKEY
  )

  return token
}

export default { generaToken, verifyToken }
