const express = require('express');
const cors = require('cors');
require('./config/db');
const personagemRoutes = require('./routes/personagemRoutes'); 

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json()); 


app.use('/api', personagemRoutes); 

app.get('/', (req, res) => {
    res.send('Taverna do RPG: Servidor Backend Rodando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});