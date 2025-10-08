import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPrincipal from './components/MenuPrincipal/MenuPrincipal';
import Breadcrumb from './components/BreadCrumb/BreadCrumb';
import AutorListPage from './pages/Autor/AutorListPage';
import AutorCreatePage from './pages/Autor/AutorCreatePage';
import AutorEditPage from './pages/Autor/AutorEditPage';

import './App.css';

// Páginas (futuro) precisará criar estas compnentes
import Home from './components/Home/Home';
import Usuarios from './components/Usuario/Usuarios';
/*import Livros from './pages/Livros';
import Autores from './pages/Autores';
import Usuarios from './pages/Usuarios';
import Emprestimos from './pages/Emprestimos';*/

// Componentes temporários
const Livros = () => <div className="container mt-4"><h2>Página de Livros</h2></div>;
const Autores = () => <div className="container mt-4"><h2>Página de Autores</h2></div>;
const Emprestimos = () => <div className="container mt-4"><h2>Página de Empréstimos</h2></div>;

function App() {
   
  return (
    <div className="App">
      <Router>
      <div className="App">
        <MenuPrincipal />
        
        <main className="container-fluid">
          <div className="container mt-3">
            <Breadcrumb />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/livros" element={<Livros />} />
              <Route path="/livros/novo" element={<div>Novo Livro</div>} />
              <Route path="/autores" element={<AutorListPage />} />
              <Route path="/autores/novo" element={<AutorCreatePage />} />
              <Route path="/autores/editar/:id" element={<AutorEditPage />} />
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/emprestimos" element={<Emprestimos />} />
              
              {/* Rotas para páginas não encontradas */}
              <Route path="*" element={
                <div className="text-center py-5">
                  <h1>404 - Página Não Encontrada</h1>
                  <p>A página que você está procurando não existe.</p>
                </div>
              } />
            </Routes>
          </div>
        </main>
      </div>
    </Router>

      
    </div>
  );
}

export default App;
