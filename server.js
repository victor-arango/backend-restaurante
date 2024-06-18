import express from 'express'
import 'dotenv/config'
// Rutas
import rol from './src/routes/RolRoute.js'

const app = express()
const PORT = process.env.PORT || 4321

app.get('/', function (req, res) {
  res.send('<h1>hello world</h1>')
})

// Llamado a las rutas.
rol(app)

app.listen(PORT, () => {
  console.log(`server running to port ${PORT}`)
})
