package com.bmt.api_library_only.service;

import java.util.List;

import com.bmt.api_library_only.model.Usuario;

public interface UserService {

    Usuario saveUser(Usuario user); // Método para salvar um usuário

    List<Usuario> getAllUsers(); // Método para obter todos os usuários

    Usuario updateUser(Long id, Usuario user); // Método para atualizar um usuário

    Usuario deleteUser(Long id); // Método para deletar um usuário

    
}
