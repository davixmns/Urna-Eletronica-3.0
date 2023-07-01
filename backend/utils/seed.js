const PartyModel = require("../models/PartyModel");
const CandidateModel = require("../models/CandidateModel");
const parties = require("../utils/data").parties;
const candidates = require("../utils/data").candidates;

module.exports = {
    async createParties() {
        const size = await PartyModel.count();
        if (size === 0) {
            try {
                for (const party of parties) {
                    await PartyModel.create({
                        name: party.name,
                        acronym: party.acronym
                    });
                }
            } catch (error) {
                console.error("Erro ao criar partidos");
                console.error(error);
            }
        }
    },

    async createCandidates() {
        const size = await CandidateModel.count();
        if (size === 0) {
            try{
                for (const candidate of candidates){
                    await CandidateModel.create({
                        name: candidate.name,
                        number: candidate.number,
                        party_id: candidate.party_id
                    });
                }
            } catch (error) {
                console.error("Erro ao criar candidatos");
                console.error(error);
            }
        }
    }
};
