//import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useRef } from 'react';
import UsuarioForm from './components/UsuarioForm';
import UsuarioList from './components/UsuarioList';
import MenuPrincipal from './components/MenuPrincipal';
import Breadcrumb from './components/BreadCrumb';

import './App.css';

// Páginas (futuro) precisará criar estas compnentes
import Home from './pages/Home';
import Livros from './pages/Livros';
import Autores from './pages/Autores';
import Usuarios from './pages/Usuarios';
import Emprestimos from './pages/Emprestimos';

function App() {
    const listRef = useRef(null);

    const autalizarLista = () => {
        if(listRef.current) {
    listRef.current.carregarUsuarios();
    }   
 };

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
              <Route path="/autores" element={<Autores />} />
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

      <header className="App-header">
        <h1>Sistema Biblioteca</h1>
        <UsuarioForm onUsuarioCadastrado={autalizarLista}/>
        <UsuarioList ref={listRef} />
      </header>
    </div>
  );
}

export default App;
