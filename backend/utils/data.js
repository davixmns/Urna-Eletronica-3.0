const fotoCiro = "https://cdn.discordapp.com/attachments/1125604141356560458/1125604301054672957/ciro.jpg"
const fotoLula = "https://cdn.discordapp.com/attachments/1125604141356560458/1125604301704790097/lula.jpg"
const fotoDavila = "https://cdn.discordapp.com/attachments/1125604141356560458/1125604301432180777/davila.jpg"
const fotoKelmon = "https://cdn.discordapp.com/attachments/1125604141356560458/1125604301981634740/padre.jpeg"
const fotoBolsonaro = "https://cdn.discordapp.com/attachments/1125604141356560458/1125604300710752367/bolsonaro.jpg"
const fotoSimone = "https://cdn.discordapp.com/attachments/1125604141356560458/1125604302333935646/simone.jpg"
const fotoSoraya = "https://cdn.discordapp.com/attachments/1125604141356560458/1125604302614974534/soraya.jpg"


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
    {name: 'Ciro Ferreira Gomes', number: 12, party_id: 1, image: fotoCiro},
    {name: 'Felipe Davila', number: 30, party_id: 2, image: fotoDavila},
    {name: 'Jair Messias Bolsonaro', number: 17, party_id: 3, image: fotoBolsonaro},
    {name: 'Luís Inácio Lula da Silva', number: 13, party_id: 4, image: fotoLula},
    {name: 'Padre Kelmon', number: 14, party_id: 5, image: fotoKelmon},
    {name: 'Simone Tebet', number: 15, party_id: 6, image: fotoSimone},
    {name: 'Soraya Thronicke', number: 16, party_id: 7, image: fotoSoraya},
];

module.exports = {
    parties,
    candidates
}