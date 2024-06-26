import express from 'express'
import 'dotenv/config'
import logger from 'morgan'
// Rutas
import rol from './src/routes/RolRoute.js'

const app = express()
const PORT = process.env.PORT || 4321

app.get('/', function (req, res) {
  res.send('<h1>hello world</h1>')
})

// Llamado a las rutas.
rol(app)
app.use(logger('dev'))
app.listen(PORT, () => {
  console.log(`server running to port ${PORT}`)
})
