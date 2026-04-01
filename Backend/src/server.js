const express = require('express');
const cors = require('cors');
require('./config/db');
const personagemRoutes = require('./routes/personagemRoutes'); // <-- Importamos nossas rotas

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json()); 

// Dizendo para o servidor usar nossas rotas. 
// Todas as rotas agora começarão com /api (ex: /api/personagens)
app.use('/api', personagemRoutes); 

app.get('/', (req, res) => {
    res.send('Taverna do RPG: Servidor Backend Rodando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});