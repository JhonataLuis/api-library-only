package com.bmt.api_library_only.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bmt.api_library_only.model.Livro;

public interface LivroRepository extends JpaRepository<Livro, Long>{

}
