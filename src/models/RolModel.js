import db from '../middleware/config.js'
const rolesModel = {}

rolesModel.getAll = async () => {
  // eslint-disable-next-line quotes
  const sql = await db`
  SELECT *
    FROM
        roles
`
  return sql
}

export default rolesModel
