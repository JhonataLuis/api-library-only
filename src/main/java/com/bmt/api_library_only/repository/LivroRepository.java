package com.bmt.api_library_only.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bmt.api_library_only.model.Livro;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Long>{

    // Verifica se já existe um livro com o mesmo ISBN
    boolean existsByIsbn(String isbn);

    // Busca por ISBN
    Optional<Livro> findByIsbn(String isbn);
}
