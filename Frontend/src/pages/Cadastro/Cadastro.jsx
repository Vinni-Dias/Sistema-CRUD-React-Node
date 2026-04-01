import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../../services/api'; 
import './Cadastro.css';

function Cadastro() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [personagem, setPersonagem] = useState({
    nome: '', idade: '', raca: '', classe: '', nivel: 1, campanha: ''
  });

  useEffect(() => {
    if (id) {
      carregarPersonagem();
    }
  }, [id]);

  const carregarPersonagem = async () => {
    try {
      const resposta = await api.get(`/personagens/${id}`);
      setPersonagem(resposta.data);
    } catch (erro) {
      console.error(erro);
      alert("Erro ao carregar os dados do aventureiro.");
    }
  };

  const handleChange = (e) => {
    setPersonagem({ ...personagem, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      if (id) {
        await api.put(`/personagens/${id}`, personagem);
        alert('Ficha atualizada com sucesso!');
      } else {
        await api.post('/personagens', personagem);
        alert('Novo aventureiro recrutado com sucesso!');
      }
      navigate('/'); 
    } catch (erro) {
      console.error(erro);
      alert("Erro ao salvar a ficha. Verifique se preencheu tudo corretamente.");
    }
  };

  return (
    <div className="cadastro-container">

      <h2 className="titulo-taverna">
        {id ? 'Atualizar Ficha (Editar)' : 'Recrutar Aventureiro (Cadastrar)'}
      </h2>
      
      <form onSubmit={handleSubmit} className="form-rpg">
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" name="nome" value={personagem.nome} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Idade:</label>
          <input type="number" name="idade" value={personagem.idade} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Raça:</label>
          <input type="text" name="raca" value={personagem.raca} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Classe:</label>
          <input type="text" name="classe" value={personagem.classe} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Nível:</label>
          <input type="number" name="nivel" value={personagem.nivel} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Campanha:</label>
          <input type="text" name="campanha" value={personagem.campanha} onChange={handleChange} />
        </div>
        <button type="submit" className="btn-salvar">Salvar Ficha</button>
      </form>
    </div>
  );
}

export default Cadastro;