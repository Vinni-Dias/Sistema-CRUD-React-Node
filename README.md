# Sistema de Taverna - Gestao de Aventureiros (RPG)

Este projeto e um sistema CRUD completo (Create, Read, Update, Delete) desenvolvido como requisito de avaliacao do PJBL. Ele permite gerenciar o cadastro de aventureiros de RPG em uma guilda/taverna.

## Tecnologias Utilizadas
* Frontend: React.js, Vite, React Router Dom, Axios, CSS.
* Backend: Node.js, Express, CORS.
* Banco de Dados: MySQL.

## Como rodar o projeto localmente

### 1. Banco de Dados
1. Abra o MySQL Workbench.
2. Importe e execute o arquivo `sql-CRUD.sql` para criar a base de dados e a tabela de personagens.
3. Verifique no arquivo `Backend/src/config/db.js` se as credenciais (usuario e senha) correspondem ao seu banco MySQL local.

### 2. Rodando o Backend (API)
Abra um terminal, navegue ate a pasta `Backend` e execute os comandos:

```bash
# Entre na pasta do backend
cd Backend

# Instale as dependencias (recria a pasta node_modules)
npm install

# Inicie o servidor
npm run dev

O backend estara rodando em http://localhost:3000.

```
### 3. Rodando o Frontend 
Abra um terminal, navegue ate a pasta `Frontend` e execute os comandos:
```bash
# Entre na pasta do frontend
cd Frontend

# Instale as dependencias (recria a pasta node_modules)
npm install

# Inicie a aplicacao React
npm run dev

Acesse o link gerado pelo Vite no terminal (geralmente http://localhost:5173) para usar o sistema.
```

Desenvolvido por: Vinicius do Paraiso Dias- Projeto de React e Node
