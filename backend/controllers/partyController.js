const PartyModel = require('../models/PartyModel')

module.exports = {
    async getAllParties(req, res) {
        const parties = await PartyModel.findAll()
        return res.status(200).json(parties)
    },

    async getPartyById(req, res) {
        const party_id= req.params.id
        const party = await PartyModel.findByPk(party_id)
        if (!party) {
            return res.status(404).json({error: "Partido não encontrado"})
        }
        return res.status(200).json(party)
    }
}