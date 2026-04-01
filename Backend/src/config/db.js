const mysql = require('mysql2');

// Configuração da conexão com o banco de dados
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Normalmente o usuário padrão é root
    password: 'VpD24092005', // Coloque a senha que você usa para entrar no Workbench
    database: 'crud' // O nome do seu Schema, exatamente como você criou
});

// Testando a conexão
conexao.connect((erro) => {
    if (erro) {
        console.error('Erro ao conectar no banco de dados:', erro);
        return;
    }
    console.log('Conexão com o banco de dados MySQL estabelecida com sucesso!');
});

module.exports = conexao;