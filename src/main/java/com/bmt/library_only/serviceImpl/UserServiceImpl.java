package com.bmt.library_only.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bmt.library_only.model.Usuario;
import com.bmt.library_only.repository.UserRepository;
import com.bmt.library_only.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<Usuario> getAllUsers() {
        // Implementação do método para obter todos os usuários
        List<Usuario> user = userRepository.findAll();
        return user; // Retornar a lista de usuários
    }
}
