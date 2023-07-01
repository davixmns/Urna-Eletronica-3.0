const Sequelize = require("sequelize")
const database = require("../database/DB")
const CandidateModel = require("./CandidateModel")

const VoterModel = database.define('voter', {
    voter_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    vote_number: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

VoterModel.belongsTo(CandidateModel, {
    foreignKey: "candidate_id"
})

module.exports = VoterModel
