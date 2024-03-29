const express = require('express');
const cors = require('cors');
const {createParties, createCandidates} = require("./utils/seed");
const app = express();

// Configurar middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//usando rotas
app.use(require("./routes/routes"));

// Iniciar servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

setTimeout(() => {
    createParties()
    createCandidates()
}, 2000)
