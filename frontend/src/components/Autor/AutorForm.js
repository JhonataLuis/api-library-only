import React, { useState, useEffect } from 'react';
import { autorService } from '../../services/autorService';

const AutorForm = ({ autor, onSubmit, onCancel, modo = 'criar' }) => {
const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    bio: '',
    nacionalidade: ''
});

const [erro, setErro] = useState('');
const [enviando, setEnviando] = useState(false);

useEffect(() => {
    if (autor) {
        setFormData(autor);
    }
}, [autor]);

const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEnviando(true);
        setErro('');

        try {
            let resultado;
            if (modo === 'update' && autor?.id) {
                resultado = await autorService.atualizar(autor.id, formData);
            } else {
                resultado = await autorService.atualizar(autor.id, formData);
            }
            onSubmit(resultado);
    } catch (error) {
            setErro(error.message || 'Erro ao enviar formulário');
        } finally {
            setEnviando(false);
        }

    };

   
    return (
        <form onSubmit={handleSubmit}>
            {erro && (
                <div className="alert alert-danger">
                    {erro}
                </div>
            )}

            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome *</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                            disabled={enviando}
                        />
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={enviando}
                        />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="telefone" className="form-label">Telefone</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            disabled={enviando}
                        />
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                        <input
                            type="date"
                            className="form-control"
                            id="dataNascimento"
                            name="dataNascimento"
                            value={formData.dataNascimento}
                            onChange={handleChange}
                            disabled={enviando}
                        />
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="nacionalidade" className="form-label">Nacionalidade</label>
                <input
                    type="text"
                    className="form-control"
                    id="nacionalidade"
                    name="nacionalidade"
                    value={formData.nacionalidade}
                    onChange={handleChange}
                    disabled={enviando}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="bio" className="form-label">Biografia</label>
                <textarea
                    className="form-control"
                    id="bio"
                    name="bio"
                    rows="4"
                    value={formData.bio}
                    onChange={handleChange}
                    disabled={enviando}
                    placeholder="Breve biografia do autor..."
                ></textarea>
            </div>

            <div className="d-flex gap-2">
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={enviando}
                >
                    {enviando ? 'Salvando...' : (modo === 'edicao' ? 'Atualizar' : 'Cadastrar')}
                </button>
                <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={onCancel}
                    disabled={enviando}
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export default AutorForm;