require("dotenv").config({path: ".env"})
const {Sequelize} = require("sequelize")

const db_name = process.env.DB_NAME
const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const host = process.env.HOST
const port = process.env.PORT

const sequelize = new Sequelize(db_name, db_user, db_password, {
    dialect: "mysql",
    host: host,
    port: port
})

sequelize.authenticate().then(() => {
    console.log("Banco conectado!")
    sequelize.sync()
}).catch((error) => {
    console.error("Erro ao conectar ao banco")
    console.error(error)
})

module.exports = sequelize