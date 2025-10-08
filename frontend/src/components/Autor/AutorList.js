import React from 'react';

const AutorList = ({ autores, carregando, onEditar, onExcluir }) => {
    if (carregando) {
        return (
            <div className="text-center my-4">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Carregando...</span>
                </div>
                <p className="mt-2">Carregando autores...</p>
            </div>
        );
    }


    if (!autores || !Array.isArray(autores) || autores.length === 0) {
        return (
            <div className="text-center py-5">
                <i className="bi bi-person-x display-1 text-muted"></i>
                <h4 className="mt-3">Nenhum autor encontrado</h4>
                <p className="text-muted">Comece cadastrando o primeiro autor.</p>
            </div>
        );
    }
    

    return (
        <div className="row">
            {autores.map(autor => {
                // Verificação defensiva para cada autor
                if (!autor || autor.id === undefined) {
                    console.warn('Autor inválido encontrado:', autor);
                    return null;
                }

                // Garante valores padrão para todas as propriedades
                const autorSeguro = {
                    id: autor.id || 'N/A',
                    nome: autor.nome || 'Nome não informado',
                    email: autor.email || '',
                    telefone: autor.telefone || '',
                    bio: autor.bio || '',
                    nacionalidade: autor.nacionalidade || 'Não informada'
                };

                 return (
                    <div key={autorSeguro.id} className="col-md-6 col-lg-4 mb-3">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <h5 className="card-title mb-0 text-primary">{autorSeguro.nome}</h5>
                                    <span className="badge bg-info">ID: {autorSeguro.id}</span>
                                </div>
                                
                                {autorSeguro.email && (
                                    <p className="card-text">
                                        <i className="bi bi-envelope me-2 text-muted"></i>
                                        <small>{autorSeguro.email}</small>
                                    </p>
                                )}
                                
                                {autorSeguro.telefone && (
                                    <p className="card-text">
                                        <i className="bi bi-telephone me-2 text-muted"></i>
                                        <small>{autorSeguro.telefone}</small>
                                    </p>
                                )}
                                
                                {autorSeguro.nacionalidade && autorSeguro.nacionalidade !== 'Não informada' && (
                                    <p className="card-text">
                                        <i className="bi bi-globe me-2 text-muted"></i>
                                        <small>{autorSeguro.nacionalidade}</small>
                                    </p>
                                )}

                                {autorSeguro.bio && (
                                    <div className="mt-2">
                                        <p className="card-text text-muted small">
                                            <strong>Biografia:</strong><br />
                                            {autorSeguro.bio.length > 120 
                                                ? `${autorSeguro.bio.substring(0, 120)}...` 
                                                : autorSeguro.bio
                                            }
                                        </p>
                                    </div>
                                )}
                            </div>
                            
                            <div className="card-footer bg-transparent">
                                <div className="d-flex gap-2 justify-content-between">
                                    <small className="text-muted">
                                        ID: {autorSeguro.id}
                                    </small>
                                    <div className="d-flex gap-1">
                                        <button 
                                            className="btn btn-outline-primary btn-sm"
                                            onClick={() => onEditar(autorSeguro)}
                                            title="Editar (em breve)"
                                            disabled
                                        >
                                            <i className="bi bi-pencil"></i>
                                        </button>
                                        <button 
                                            className="btn btn-outline-danger btn-sm"
                                            onClick={() => onExcluir(autorSeguro.id)}
                                            title="Excluir (em breve)"
                                            disabled
                                        >
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AutorList;