require("dotenv").config()
const {Sequelize} = require("sequelize")

const db_name = process.env.DB_NAME
const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const port = process.env.PORT
const host = process.env.HOST

const sequelize = new Sequelize(db_name, db_user, db_password, {
    dialect: "mysql",
    host: host,
    port: port
})

sequelize.authenticate().then(() => {
    console.log("Banco conectado!")
    sequelize.sync()
}).catch((error) => {
    console.error(error)
})

module.exports = sequelize