import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home'; 
import Listagem from './pages/Listagem/listagem'; 
import Cadastro from './pages/Cadastro/Cadastro';
import Detalhes from './pages/Detalhes/Detalhes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        
        {/* Barra de Navegação com apenas UM botão para o início */}
        <nav className="navbar">
          <Link to="/" className="nav-link">⬅ Voltar ao Início</Link>
        </nav>

        <main style={{ minHeight: '60vh' }}>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/listar" element={<Listagem />} /> 
            <Route path="/cadastrar" element={<Cadastro />} /> 
            <Route path="/editar/:id" element={<Cadastro />} /> 
            <Route path="/personagem/:id" element={<Detalhes />} /> 
          </Routes>
        </main>

        <footer className="footer">
          <p>Desenvolvido por: <strong>Vinicius do Paraiso Dias</strong> - Projeto de React e Node</p>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;