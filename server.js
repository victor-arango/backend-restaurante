import express from 'express'

const app = express()
const PORT = process.env.PORT || 4321

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log(`server running to port ${PORT}`)
})
