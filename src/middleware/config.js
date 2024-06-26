import { Sequelize } from 'sequelize'
import postgres from 'postgres'
import 'dotenv/config'

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env

// Configuración de PostgreSQL para Sequelize
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  dialectOptions: {
    ssl: {
      require: true
    }
  }
}
)
// CHECK CONNECTION
// try {
//   await sequelize.authenticate()
//   console.log('Connection has been established successfully.')
// } catch (error) {
//   console.error('Unable to connect to the database:', error)
// }

// eslint-disable-next-line no-unused-vars
const db = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`
  }
})

export { sequelize }

// import postgres from 'postgres'
// import 'dotenv/config'

// const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env

// const db = postgres({
//   host: PGHOST,
//   database: PGDATABASE,
//   username: PGUSER,
//   password: PGPASSWORD,
//   port: 5432,
//   ssl: 'require',
//   connection: {
//     options: `project=${ENDPOINT_ID}`
//   }
// })

// export default db
