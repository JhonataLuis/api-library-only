import React, { useState,  useEffect } from 'react';

const LivroForm = ({ livro, onSave, onCancel }) => {
    const [formData, serFormData] = useState({
        titulo: '',
        isbn: '',
        anoPublicacao: '',
        quantidadeTotal: 1,
        imagemUrl: '',
        nomeImagem: ''
    });

    const [autores, setAutores] = useState([]);
}