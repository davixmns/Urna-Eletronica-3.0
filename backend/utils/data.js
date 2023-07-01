
const parties = [
    {name: 'Partido Democrático Trabalhista', acronym: 'PDT'}, //1
    {name: 'Partido Novo', acronym: 'NOVO'}, //2
    {name: 'Partido Liberal', acronym: 'PL'}, //3
    {name: 'Partido dos Trabalhadores', acronym: 'PT'}, //4
    {name: 'Partido Trabalhista Brasileiro', acronym: 'PTB'}, //5
    {name: 'Movimento Democrático Brasileiro', acronym: 'MDB'}, //6
    {name: 'União Brasil', acronym: 'UB'}, //7
];

const candidates = [
    {name: 'Ciro Ferreira Gomes', number: 12, party_id: 1},
    {name: 'Felipe Davila', number: 30, party_id: 2},
    {name: 'Jair Messias Bolsonaro', number: 17, party_id: 3},
    {name: 'Luís Inácio Lula da Silva', number: 13, party_id: 4},
    {name: 'Padre Kelmon', number: 14, party_id: 5},
    {name: 'Simone Tebet', number: 15, party_id: 6},
    {name: 'Soraya Thronicke', number: 16, party_id: 7},
];

module.exports = {
    parties,
    candidates
}