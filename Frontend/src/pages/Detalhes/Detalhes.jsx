import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../services/api'; 
import './Detalhes.css';

function Detalhes() {
  const { id } = useParams(); // Pega o ID da URL
  const [personagem, setPersonagem] = useState(null); 

  useEffect(() => {
    carregarDetalhes();
  }, [id]);

  const carregarDetalhes = async () => {
    try {
      const resposta = await api.get(`/personagens/${id}`);
      setPersonagem(resposta.data); 
    } catch (erro) {
      console.error("Erro ao buscar detalhes:", erro);
      alert("Erro ao desenrolar o pergaminho deste aventureiro!");
    }
  };

  if (!personagem) {
    return (
      <div className="detalhes-container">

        <h2 style={{ color: '#6f42c1', textAlign: 'center' }}>Lendo os registros da Taverna...</h2>
      </div>
    );
  }

  return (
    <div className="detalhes-container">
      <div className="ficha-header">
        <h2>Ficha do Aventureiro: {personagem.nome}</h2>
      </div>
      
      <div className="ficha-info">
        <p><strong>Registro (ID):</strong> {personagem.idPersonagens}</p>
        <p><strong>Nome:</strong> {personagem.nome}</p>
        <p><strong>Idade:</strong> {personagem.idade ? `${personagem.idade} anos` : 'Desconhecida'}</p>
        <p><strong>Raça:</strong> {personagem.raca}</p>
        <p><strong>Classe:</strong> {personagem.classe}</p>
        <p><strong>Nível:</strong> {personagem.nivel}</p>
        <p><strong>Campanha Atual:</strong> {personagem.campanha}</p>
      </div>

      <div className="botoes-acao">
        <Link to="/listar" className="btn-voltar">Voltar para a Taverna</Link>
        <Link to={`/editar/${personagem.idPersonagens}`} className="btn-editar">Editar Ficha</Link>
      </div>
    </div>
  );
}

export default Detalhes;