import React, { useRef } from 'react';
import UsuarioForm from './UsuarioForm';
import UsuarioList from './UsuarioList';

const Usuarios = () => {
    const listRef = useRef(null);

     const atualizarLista = () => {
        if (listRef.current) {
            listRef.current.carregarUsuarios();
        }
    };

    return (
        <div className="container mt-4">
            <h2>Gerenciamento de Usuários</h2>
            <div className="row">
                <div className="col-md-4">
                    <UsuarioForm onUsuarioAdicionado={atualizarLista} />
                </div>
                <div className="col-md-8">
                    <UsuarioList ref={listRef} />
                </div>
            </div>
        </div>
    );
};

export default Usuarios;