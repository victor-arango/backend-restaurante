import express from 'express'
import 'dotenv/config'
import logger from 'morgan'
// Rutas
import rol from './src/routes/RolRoute.js'
import user from './src/routes/UserRoute.js'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 4321
// app.use(cors)
// app.disable('x-powered-by')
app.get('/', function (req, res) {
  res.send('<h1>hello world</h1>')
})

// Llamado a las rutas.
rol(app)
user(app)
app.use(logger('dev'))
app.listen(PORT, () => {
  console.log(`server running to port ${PORT}`)
})
