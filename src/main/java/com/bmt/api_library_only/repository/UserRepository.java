package com.bmt.api_library_only.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bmt.api_library_only.model.Usuario;


public interface UserRepository extends JpaRepository<Usuario, Long>{

}
