import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export function getAllParties() {
    return axios.get(`${BASE_URL}/parties`)
}

export function getAllCandidates() {
    return axios.get(`${BASE_URL}/candidates`)
}

export function createVoter(name, cpf, voteNumber) {
    return axios.post(`${BASE_URL}/voter`, {name, cpf, vote_number: voteNumber})
}

export function getVoterByCpf(cpf) {
    return axios.get(`${BASE_URL}/voter/${cpf}`)
}

