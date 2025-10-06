package com.bmt.api_library_only.serviceImpl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.bmt.api_library_only.model.Usuario;
import com.bmt.api_library_only.repository.UserRepository;
import com.bmt.api_library_only.service.UserService;

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

    /**
     * Método para atualizar um usuário existente
     * @return Usuario atualizado
     */
    @Override
    public Usuario updateUser(Long id, Usuario user) {
        logger.info("Atualizando o usuário com ID: {}", id);
        return userRepository.findById(id).map(existingUser -> {
            existingUser.setNome(user.getNome());
            existingUser.setEmail(user.getEmail());
            existingUser.setTelefone(user.getTelefone());
            return userRepository.save(existingUser);
        }).orElseThrow(() -> new RuntimeException("Usuário não encontrado com ID: " + id));
    }

    /**
     * Método para deletar um usuário existente
     * @return Usuario deletado
     */
    @Override
    public Usuario deleteUser(Long id) {
        logger.info("Deletando o usuário com ID: {}", id);
        return userRepository.findById(id).map(user -> {
            userRepository.delete(user);
            return user;
        }).orElseThrow(() -> new RuntimeException("Usuário não encontrado com ID: " + id));
    }
}
