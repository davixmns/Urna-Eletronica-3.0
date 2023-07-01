const CandidateModel = require("../models/CandidateModel")

module.exports = {
    async getAllCandidates(req, res) {
        const candidates = await CandidateModel.findAll()
        return res.status(200).json(candidates)
    }
}