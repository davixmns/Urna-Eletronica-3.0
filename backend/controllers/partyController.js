const PartyModel = require('../models/PartyModel')

module.exports = {
    async getAllParties(req, res) {
        const parties = await PartyModel.findAll()
        return res.status(200).json(parties)
    }
}