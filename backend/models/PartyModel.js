const Sequelize = require("sequelize")
const database = require("../database/DB")

const PartyModel = database.define("party", {
    party_id:{
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    acronym: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = PartyModel