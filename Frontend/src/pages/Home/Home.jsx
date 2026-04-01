import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Sistema da Taverna</h1>
      <p className="home-subtitle">O que você deseja fazer hoje?</p>
      
      <div className="menu-cards">
        <Link to="/listar" className="menu-card">
          <h2>Ver Taverna</h2>
          <p>Acesse a lista completa para ver, editar ou remover os aventureiros registrados.</p>
        </Link>
        
        <Link to="/cadastrar" className="menu-card">
          <h2>Novo Aventureiro</h2>
          <p>Abra um novo formulário de recrutamento para cadastrar um personagem.</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;