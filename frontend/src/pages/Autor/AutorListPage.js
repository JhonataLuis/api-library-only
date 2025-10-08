import React, { useState, useEffect } from 'react';
import autorService from '../../services/autorService';
import AutorList from '../../components/Autor/AutorList';
import AutorForm from '../../components/Autor/AutorForm';

const AutorListPage = () => {
    const [autores, setAutores] = useState([]); // Lista de autores array vazia inicialmente
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');
    const [mostrarForm, setMostrarForm] = useState(false);
    const [autorEditando, setAutorEditando] = useState(null);

const carregarAutores = async () => {
        setCarregando(true);
        setErro('');
        try {
            console.log('🔄 Carregando autores do PostgreSQL...');
            const dados = await autorService.listar(); // Usando o método listar do autorService

            // Garante que os dados sejam um array válido
            if (dados && Array.isArray(dados)) {
                setAutores(dados);
                console.log(`✅ ${dados.length} autores carregados com sucesso`);
            } else {
                console.warn('⚠️ Dados recebidos não são um array:', dados);
                setAutores([]);
            }
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

        // Verifica se o autor é valido antes de editar
        if(autor && autor.id){
            setAutorEditando(autor);
            setMostrarForm(true);
        } else {
            console.error('Tentativa de editar autor inválido:', autor);
            alert('Erro: Autor inválido para edição');
        }
    };

    const handleSalvarSucesso = (autorSalvo) => {

        // Verifica se o autor salvo é válido
        if (autorSalvo && autorSalvo.id) {
            console.log('✅ Autor salvo no PostgreSQL:', autorSalvo);
            setMostrarForm(false);
            setAutorEditando(null);
            
            // Recarrega a lista para incluir o novo autor
            carregarAutores();
            
            // Mostra mensagem de sucesso
            alert(`Autor "${autorSalvo.nome}" salvo com sucesso no banco de dados!`);
            
        } else {
            console.error('Autor salvo inválido:', autorSalvo);
            setErro('Erro: Autor salvo é inválido');
        }
    };

    const handleCancelar = () => {
        setMostrarForm(false);
        setAutorEditando(null);
    };

    const handleExcluirAutor = (autorId) => {
        setAutores(prev => prev.filter(autor => autor.id !== autorId));
         console.log('Exclusão solicitada para autor ID:', autorId);
        alert('Funcionalidade de exclusão será implementada em breve!');
    };

    // Debug: monitora o estado de autores
    useEffect(() => {
        console.log('📊 Estado atual de autores:', autores);
    }, [autores]);

    if (erro && !carregando) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger">
                    <h4>Erro ao carregar autores</h4>
                    <p>{erro}</p>
                    <div className="mt-3">
                        <button 
                            className="btn btn-primary me-2"
                            onClick={carregarAutores}
                        >
                            Tentar Novamente
                        </button>
                        <small className="text-muted d-block mt-2">
                            Verifique se o servidor Spring está rodando na porta 8080
                        </small>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>📚 Gerenciamento de Autores</h1>
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
                <div className="card-header bg-success text-white">
                    <h5 className="mb-0">
                        <i className="bi bi-list-ul me-2"></i>
                        Lista de Autores {autores.length > 0 && `(${autores.length})`} 

                    </h5>
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

             {/* Status do Sistema */}
            <div className="mt-3 text-center">
                <small className="text-muted">
                    💾 Dados salvos em: <strong>PostgreSQL</strong> | 
                    🚀 Backend: <strong>Spring Boot</strong> | 
                    ⚡ Frontend: <strong>React</strong>
                </small>
            </div>

        </div>
    );
};

export default AutorListPage;