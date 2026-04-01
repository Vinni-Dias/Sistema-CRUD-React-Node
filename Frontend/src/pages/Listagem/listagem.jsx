import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'; 
import './Listagem.css';

function Listagem() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    carregarPersonagens();
  }, []);

  const carregarPersonagens = async () => {
    try {
      const resposta = await api.get('/personagens');
      setPersonagens(resposta.data); 
    } catch (erro) {
      console.error("Erro ao buscar personagens:", erro);
      alert("Erro ao carregar a lista da Taverna! Verifique se o backend está rodando."); 
    }
  };

  const deletarPersonagem = async (id) => {
    const confirmar = window.confirm("Tem certeza que deseja banir este aventureiro da Taverna?");
    if (confirmar) {
      try {
        await api.delete(`/personagens/${id}`);
        alert("Personagem removido com sucesso!");
        carregarPersonagens(); 
      } catch (erro) {
        console.error("Erro ao deletar:", erro);
        alert("Erro ao tentar deletar o personagem.");
      }
    }
  };

  return (
    <div>
      {/* Aqui está a mágica: Título e Botão lado a lado! */}
      <div className="cabecalho-listagem">
        <h2 className="titulo-taverna">Taverna - Lista de Aventureiros</h2>
        <Link to="/cadastrar" className="btn-novo">➕ Novo Aventureiro</Link>
      </div>
      
      <table className="tabela-rpg">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Raça</th>
            <th>Classe</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {personagens.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>Nenhum aventureiro na taverna ainda.</td>
            </tr>
          ) : (
            personagens.map((personagem) => (
              <tr key={personagem.idPersonagens}>
                <td>{personagem.idPersonagens}</td>
                <td>{personagem.nome}</td>
                <td>{personagem.raca}</td>
                <td>{personagem.classe}</td>
                <td>
                  <Link to={`/personagem/${personagem.idPersonagens}`} className="btn-detalhes">Detalhes</Link>
                  <button onClick={() => deletarPersonagem(personagem.idPersonagens)} className="btn-deletar">Deletar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Listagem;