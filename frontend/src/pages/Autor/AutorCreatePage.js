import React from 'react';
import { useNavigate } from 'react-router-dom';
import AutorForm from '../../components/Autor/AutorForm';

const AutorCreatePage = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        // Redireciona de volta para a lista após criar
        navigate('/autores');
    };

    const handleCancel = () => {
        navigate('/autores');
    };

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0">Cadastrar Novo Autor</h5>
                </div>
                <div className="card-body">
                    <AutorForm
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                        modo="criacao"
                    />
                </div>
            </div>
        </div>
    );
};

export default AutorCreatePage;