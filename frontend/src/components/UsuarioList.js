import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react"; 

const UsuarioList = forwardRef((props, ref) => {
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');
    const [usuarioEditando, setUsuarioEditando] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);

    const carregarUsuarios = async () => {
        try {
            setCarregando(true);
            setErro('');
            const response = await fetch("/api/users");

            if (!response.ok) {
                throw new Error(`Erro ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            setUsuarios(data);
        } catch (error) {
            console.error("Erro ao carregar usuários:", error);
            setErro("❌ Não foi possível carregar a lista de usuários. Verifique se o backend está rodando.");
        } finally {
            setCarregando(false);
        }
    };

    const excluirUsuario = async (id, nome) => {
        if(!window.confirm(`Tem certeza que deseja excluir este usuário "${nome}"?`)) {
            return;
        }

        try{
            const response = await fetch(`/api/users/${id}`, {
                method: 'DELETE',
            });

            if(response.ok) {
                // Remove o usuário da lista localmente
                setUsuarios(usuarios.filter(user => user.id !== id));

                // Mostra mensagem de sucesso
                alert('✅ Usuário excluído com sucesso!');
            } else {
                throw new Error(`Erro ao excluir usuário ${response.status}: ${response.statusText}`);
            }
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
            alert("❌ Não foi possível excluir o usuário. Tente novamente mais tarde.");    
        }
    };

    const editarUsuario = (usuario) => {
        setUsuarioEditando(usuario);
        setMostrarModal(true);
    };

    const salvarEdicao = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`/api/users/${usuarioEditando.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuarioEditando)
            });

            if (response.ok) {
                // Atualiza a lista
                await carregarUsuarios();
                setMostrarModal(false);
                setUsuarioEditando(null);
                alert('Usuário atualizado com sucesso!');
            } else {
                throw new Error('Erro ao atualizar usuário');
            }
        } catch (error) {
            console.error("Erro ao editar usuário:", error);
            alert('Erro ao atualizar usuário. Tente novamente.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUsuarioEditando(prev => ({
            ...prev,
            [name]: value
        }));
    };

    useImperativeHandle(ref, () => ({
        carregarUsuarios
    }));

    useEffect(() => {
        carregarUsuarios();
    }, []);

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <div className="card shadow-sm border-0">
                        <div className="card-header bg-primary text-white">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="card-title mb-0">
                                    <i className="bi bi-people-fill me-2"></i>
                                    Lista de Usuários
                                </h4>
                                <span className="badge bg-light text-dark">
                                    {usuarios.length} usuário(s)
                                </span>
                            </div>
                        </div>
                        
                        <div className="card-body">
                            {/* Mensagem de erro */}
                            {erro && (
                                <div className="alert alert-danger d-flex align-items-center" role="alert">
                                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                    <div>{erro}</div>
                                </div>
                            )}

                            {/* Loading */}
                            {carregando && (
                                <div className="text-center py-4">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Carregando...</span>
                                    </div>
                                    <p className="mt-2 text-muted">Carregando usuários...</p>
                                </div>
                            )}

                            {/* Lista de usuários */}
                            {!carregando && usuarios.length === 0 && !erro && (
                                <div className="text-center py-4">
                                    <i className="bi bi-person-x display-4 text-muted"></i>
                                    <p className="mt-2 text-muted">Nenhum usuário cadastrado.</p>
                                </div>
                            )}

                            {!carregando && usuarios.length > 0 && (
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped">
                                        <thead className="table-light">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Nome</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Telefone</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {usuarios.map((user, index) => (
                                                <tr key={user.id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2" 
                                                                 style={{width: '32px', height: '32px'}}>
                                                                <span className="text-white small fw-bold">
                                                                    {user.nome?.charAt(0).toUpperCase()}
                                                                </span>
                                                            </div>
                                                            {user.nome}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href={`mailto:${user.email}`} className="text-decoration-none">
                                                            {user.email}
                                                        </a>
                                                    </td>
                                                    <td>
                                                        {user.telefone || (
                                                            <span className="text-muted fst-italic">Não informado</span>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <span className={`badge ${user.ativo ? 'bg-success' : 'bg-secondary'}`}>
                                                            {user.ativo ? 'Ativo' : 'Inativo'}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-center gap-2">
                                                            <button
                                                                onClick={() => editarUsuario(user)}
                                                                className="btn btn-warning btn-sm"
                                                                title="Editar usuário"
                                                            >
                                                                <i className="bi bi-pencil"></i>
                                                                <span className="visually-hidden">Editar</span>
                                                            </button>
                                                            <button
                                                                onClick={() => excluirUsuario(user.id, user.nome)}
                                                                className="btn btn-danger btn-sm"
                                                                title="Excluir usuário"
                                                            >
                                                                <i className="bi bi-trash"></i>
                                                                <span className="visually-hidden">Excluir</span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                        
                        <div className="card-footer bg-light">
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">
                                    Última atualização: {new Date().toLocaleTimeString()}
                                </small>
                                <button
                                    onClick={carregarUsuarios}
                                    disabled={carregando}
                                    className="btn btn-primary btn-sm"
                                >
                                    {carregando ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                            Carregando...
                                        </>
                                    ) : (
                                        <>
                                            <i className="bi bi-arrow-clockwise me-1"></i>
                                            Atualizar Lista
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de Edição */}
            {mostrarModal && usuarioEditando && (
                <div className="modal fade show" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Editar Usuário</h5>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={() => setMostrarModal(false)}
                                ></button>
                            </div>
                            <form onSubmit={salvarEdicao}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="nome" className="form-label">Nome</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nome"
                                            name="nome"
                                            value={usuarioEditando.nome || ''}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={usuarioEditando.email || ''}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="telefone" className="form-label">Telefone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="telefone"
                                            name="telefone"
                                            value={usuarioEditando.telefone || ''}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Status</label>
                                        <div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="ativo"
                                                    id="ativo_sim"
                                                    value={true}
                                                    checked={usuarioEditando.ativo === true}
                                                    onChange={() => setUsuarioEditando(prev => ({...prev, ativo: true}))}
                                                />
                                                <label className="form-check-label" htmlFor="ativo_sim">
                                                    Ativo
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="ativo"
                                                    id="ativo_nao"
                                                    value={false}
                                                    checked={usuarioEditando.ativo === false}
                                                    onChange={() => setUsuarioEditando(prev => ({...prev, ativo: false}))}
                                                />
                                                <label className="form-check-label" htmlFor="ativo_nao">
                                                    Inativo
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button 
                                        type="button" 
                                        className="btn btn-secondary" 
                                        onClick={() => setMostrarModal(false)}
                                    >
                                        Cancelar
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Salvar Alterações
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
});

export default UsuarioList;