const db = require('../config/db');

// CREATE (POST) - Adicionar um novo personagem no banco
const criarPersonagem = (req, res) => {
    // Pegando os dados que o React vai enviar
    const { nome, idade, classe, raca, nivel, campanha } = req.body;

    // Validação exigida pelo edital
    if (!nome || !raca || !classe) {
        return res.status(400).json({ erro: 'Nome, raça e classe são obrigatórios para a ficha!' });
    }

    const query = 'INSERT INTO personagens (nome, idade, classe, raca, nivel, campanha) VALUES (?, ?, ?, ?, ?, ?)';
    
    db.query(query, [nome, idade || null, classe, raca, nivel || 1, campanha || 'Nenhuma'], (err, results) => {
        if (err) {
            return res.status(500).json({ erro: 'Erro ao criar personagem no banco de dados.', detalhes: err.message });
        }
        res.status(201).json({ mensagem: 'Personagem criado com sucesso!', idPersonagens: results.insertId });
    });
};

// READ (GET) - Listar todos os personagens do banco
const listarPersonagens = (req, res) => {
    const query = 'SELECT * FROM personagens';
    
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ erro: 'Erro ao buscar personagens.', detalhes: err.message });
        }
        res.status(200).json(results);
    });
};

// READ (GET) - Visualização detalhada de um personagem específico
const buscarPersonagem = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM personagens WHERE idPersonagens = ?';
    
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ erro: 'Erro ao buscar o personagem.', detalhes: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ erro: 'Personagem não encontrado na taverna!' });
        }
        res.status(200).json(results[0]);
    });
};

// UPDATE (PUT) - Atualizar um personagem no banco
const atualizarPersonagem = (req, res) => {
    const { id } = req.params;
    const { nome, idade, classe, raca, nivel, campanha } = req.body;

    const query = 'UPDATE personagens SET nome = ?, idade = ?, classe = ?, raca = ?, nivel = ?, campanha = ? WHERE idPersonagens = ?';
    
    db.query(query, [nome, idade, classe, raca, nivel, campanha, id], (err, results) => {
        if (err) {
            return res.status(500).json({ erro: 'Erro ao atualizar o personagem.', detalhes: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ erro: 'Personagem não encontrado para atualizar!' });
        }
        res.status(200).json({ mensagem: 'Ficha do personagem atualizada com sucesso!' });
    });
};

// DELETE (DELETE) - Remover um personagem do banco
const deletarPersonagem = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM personagens WHERE idPersonagens = ?';
    
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ erro: 'Erro ao deletar o personagem.', detalhes: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ erro: 'Personagem não encontrado para deletar!' });
        }
        res.status(200).json({ mensagem: 'Personagem removido da campanha com sucesso!' });
    });
};

module.exports = {
    criarPersonagem,
    listarPersonagens,
    buscarPersonagem,
    atualizarPersonagem,
    deletarPersonagem
};