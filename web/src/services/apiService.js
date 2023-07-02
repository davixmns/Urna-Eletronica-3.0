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

