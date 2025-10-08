import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { autorService } from '../../services/autorService';
import AutorForm from '../../components/Autor/AutorForm';

const AutorEditPage = () => {
    const [autor, setAutor] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const carregarAutor = async () => {
            try {
                const dados = await autorService.obterPorId(id);
                setAutor(dados);
            } catch (error) {
                setErro(error.message);
            } finally {
                setCarregando(false);
            }
        };

        if (id) {
            carregarAutor();
        }
    }, [id]);

    const handleSubmit = () => {
        navigate('/autores');
    };

    const handleCancel = () => {
        navigate('/autores');
    };

    if (carregando) {
        return (
            <div className="container mt-4">
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Carregando...</span>
                    </div>
                    <p className="mt-2">Carregando autor...</p>
                </div>
            </div>
        );
    }

    if (erro) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger">
                    <h4>Erro ao carregar autor</h4>
                    <p>{erro}</p>
                    <button 
                        className="btn btn-primary"
                        onClick={() => navigate('/autores')}
                    >
                        Voltar para Lista
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <h5 className="mb-0">Editar Autor</h5>
                </div>
                <div className="card-body">
                    <AutorForm
                        autor={autor}
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                        modo="edicao"
                    />
                </div>
            </div>
        </div>
    );
};

export default AutorEditPage;