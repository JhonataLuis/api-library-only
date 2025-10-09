package com.bmt.api_library_only.service;

import java.util.List;
import java.util.Optional;

import com.bmt.api_library_only.model.Livro;

public interface LivroService {

    // Operações básicas CRUD
    List<Livro> getAllLivros();

    Optional<Livro> getLivroById(Long id);

    Livro saveLivro(Livro livro);

    Livro updateLivro(Long id, Livro livro);
    
    void deleteLivro(Long id);

}
