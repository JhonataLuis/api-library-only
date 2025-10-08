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

    if (!autores || autores.length === 0) {
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
            {autores.map(autor => (
                <div key={autor.id} className="col-md-6 col-lg-4 mb-3">
                    <AutorCard 
                        autor={autor} 
                        onEditar={onEditar}
                        onExcluir={onExcluir}
                    />
                </div>
            ))}
        </div>
    );
};

export default AutorList;