const VoterModel = require('../models/VoterModel')
const bcrypt = require('bcryptjs')
const CandidateModel = require('../models/CandidateModel')

module.exports = {
    async getVoterByCpf(req, res) {
        const {cpf} = req.params
        const voter = await VoterModel.findOne({where: {cpf: cpf}})
        if (!voter) {
            return res.status(200).json({message: "Eleitor não encontrado"})
        }
        return res.status(401).json({error: "CPF já cadastrado"})
    },

    async getAllVoters(req, res) {
        const voters = await VoterModel.findAll()
        return res.status(200).json(voters)
    },

    async createVoter(req, res) {
        let {name, cpf, vote_number} = req.body
        if(!name || !cpf || !vote_number){
            return res.status(400).json({error: "Dados obrigatórios não foram preenchidos"})
        }
        vote_number = vote_number.toString()
        const voter = await VoterModel.findOne({where: {cpf: cpf}})
        if (voter) {
            return res.status(400).json({error: "Eleitor já cadastrado"})
        }
        const candidate = await CandidateModel.findOne({where: {number: vote_number}})
        if (!candidate) {
            return res.status(400).json({error: "Número de candidato inválido"})
        }
        const hashVote = await bcrypt.hash(vote_number, 12)
        await VoterModel.create(
            {
                name,
                cpf,
                vote_number: hashVote,
                candidate_id: candidate.candidate_id
            }
        ).then(async () => {
            candidate.vote_amount += 1
            await candidate.save()
            return res.status(201).json({message: "Eleitor cadastrado com sucesso"})
        }).catch((error) => {
            return res.status(500).json({message: "Erro ao cadastrar eleitor", error: error})
        })
    }
}