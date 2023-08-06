import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export function getAllParties() {
    return axios.get(`${BASE_URL}/parties`)
        .then(res => res.data)
        .catch(err => {
            console.log(err)
            return null
        })
}

export function getAllCandidates() {
    return axios.get(`${BASE_URL}/candidates`)
        .then(res => res.data)
        .catch(err => {
            console.log(err)
            return null
        })
}

export function createVoter(name, cpf, voteNumber) {
    try {
        return axios.post(`${BASE_URL}/voter`, {name, cpf, vote_number: voteNumber})
    } catch (e) {
        return e
    }
}

export function getVoterByCpf(cpf) {
    try {
        return axios.get(`${BASE_URL}/voter/${cpf}`)
    } catch (e) {
        return e
    }
}

