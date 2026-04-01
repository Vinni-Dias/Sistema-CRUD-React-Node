const express = require('express');
const router = express.Router();
const personagemController = require('../controllers/personagemController');

// Definindo os endpoints do CRUD 
router.post('/personagens', personagemController.criarPersonagem);       
router.get('/personagens', personagemController.listarPersonagens);        
router.get('/personagens/:id', personagemController.buscarPersonagem);     
router.put('/personagens/:id', personagemController.atualizarPersonagem);  
router.delete('/personagens/:id', personagemController.deletarPersonagem); 

module.exports = router;