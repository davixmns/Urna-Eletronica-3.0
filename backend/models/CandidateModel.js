const database = require("../database/DB")
const Sequelize = require("sequelize")
const PartyModel = require("./PartyModel")

const CandidateModel = database.define("candidate", {
    candidate_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    vote_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    timestamps: false
})

CandidateModel.belongsTo(PartyModel, {
    foreignKey: "party_id"
})

module.exports = CandidateModel