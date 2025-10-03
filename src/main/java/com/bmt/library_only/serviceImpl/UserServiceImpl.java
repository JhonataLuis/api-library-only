package com.bmt.library_only.serviceImpl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.bmt.library_only.model.Usuario;
import com.bmt.library_only.repository.UserRepository;
import com.bmt.library_only.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Método para obter todos os usuários
     * @return Lista de usuários
     * 
     */
    @Override
    public List<Usuario> getAllUsers() {
        logger.info("Obtendo todos os usuários do banco de dados");
        // Implementação do método para obter todos os usuários
        List<Usuario> user = userRepository.findAll();
        return user; // Retornar a lista de usuários
    }

    /**
     * Método para salvar um usuário
     * @return Usuario salvo
     */
    @Override
    public Usuario saveUser(Usuario user) {
        logger.info("Salvando um novo usuário no banco de dados");
        return userRepository.save(user);
    }
}
