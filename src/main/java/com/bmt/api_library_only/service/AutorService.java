package com.bmt.api_library_only.service;

import java.util.List;
import java.util.Optional;

import com.bmt.api_library_only.model.Autor;

public interface AutorService {

   
    List<Autor> getAllAutors(); // Método para obter todos os autores

    Optional<Autor> getAutorId(Long id); // Método para obter um Autor pelo id

    Autor saveAutor(Autor autor); // Método para salvar um autor

    Autor updateAutor(Long id, Autor autor); // Método para atualizar um autor

    void deleteAutor(Long id); // Método para deletar um autor
}
