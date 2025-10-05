//import React, { useEffect, useState } from 'react';
import React, { useRef } from 'react';
import UsuarioForm from './components/UsuarioForm';
import UsuarioList from './components/UsuarioList';
import './App.css';

function App() {
    const listRef = useRef(null);

    const autalizarLista = () => {
        if(listRef.current) {
    listRef.current.carregarUsuarios();
    }   
 };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sistema Biblioteca</h1>
        <UsuarioForm onUsuarioCadastrado={autalizarLista}/>
        <UsuarioList ref={listRef} />
      </header>
    </div>
  );
}

export default App;
