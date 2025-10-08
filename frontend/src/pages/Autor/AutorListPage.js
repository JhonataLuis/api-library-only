import React, { useState, useEffect, use } from 'react';
import { autorService } from '../../services/autorService';
import AutorList from '../../components/Autor/AutorList';
import AutorForm from '../../components/Autor/AutorForm';

const AutorListPage = () => {
    const [autores, setAutores] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');
    const [mostrarForm, setMostrarForm] = useState(false);
    const [autorEditando, setAutorEditando] = useState(null);

const carregarAutores = async () => {
        setCarregando(true);
        setErro('');
        try {
            const dados = await autorService.listar();
            setAutores(dados);
        } catch (error) {
            setErro(error.message);
        } finally {
            setCarregando(false);
        }
    };

    useEffect(() => {
        carregarAutores();
    }, []);

    const handleNovoAutor = () => {
        setAutorEditando(null);
        setMostrarForm(true);
    };

    const handleEditarAutor = (autor) => {
        setAutorEditando(autor);
        setMostrarForm(true);
    };

    const handleSalvarSucesso = () => {
        setMostrarForm(false);
        setAutorEditando(null);
        carregarAutores();
    };

    const handleCancelar = () => {
        setMostrarForm(false);
        setAutorEditando(null);
    };

    const handleExcluirAutor = (autorId) => {
        setAutores(prev => prev.filter(autor => autor.id !== autorId));
    };

    if (erro && !carregando) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger">
                    <h4>Erro ao carregar autores</h4>
                    <p>{erro}</p>
                    <button 
                        className="btn btn-primary"
                        onClick={carregarAutores}
                    >
                        Tentar Novamente
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Gerenciamento de Autores</h1>
                <button 
                    className="btn btn-primary"
                    onClick={handleNovoAutor}
                    disabled={carregando}
                >
                    <i className="bi bi-person-plus me-2"></i>
                    Novo Autor
                </button>
            </div>

            {mostrarForm && (
                <div className="card mb-4">
                    <div className="card-header">
                        <h5 className="mb-0">
                            {autorEditando ? 'Editar Autor' : 'Cadastrar Novo Autor'}
                        </h5>
                    </div>
                    <div className="card-body">
                        <AutorForm
                            autor={autorEditando}
                            onSubmit={handleSalvarSucesso}
                            onCancel={handleCancelar}
                            modo={autorEditando ? 'edicao' : 'criacao'}
                        />
                    </div>
                </div>
            )}

            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0">Lista de Autores</h5>
                </div>
                <div className="card-body">
                    <AutorList
                        autores={autores}
                        carregando={carregando}
                        onEditar={handleEditarAutor}
                        onExcluir={handleExcluirAutor}
                    />
                </div>
            </div>
        </div>
    );
};

export default AutorListPage;