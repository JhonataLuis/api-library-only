package com.bmt.api_library_only.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bmt.api_library_only.model.Livro;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Long>{

}
