package com.bmt.api_library_only.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bmt.api_library_only.service.UserService;
import com.bmt.api_library_only.model.Usuario;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000") // Ajuste conforme a origem do seu frontend
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private final UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("/test")
    public String test(){
        logger.info("Teste de conexão bem sucedida!");
        return "Conexão bem sucedida!" + java.time.LocalDateTime.now();
    }

    // Aqui você pode adicionar endpoints para gerenciar usuários
    @GetMapping
    public ResponseEntity<List<Usuario>> getAllUsers() {
        logger.info("Buscando todos os usuários");
        List<Usuario> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @PostMapping
    public ResponseEntity<Usuario> createUser(@RequestBody Usuario user) {
        logger.info("Recebendo requisição para criar usuário: {}", user.getNome());

        try{
             Usuario savedUser = userService.saveUser(user);
             logger.info("Usuário criado com ID: {}", savedUser.getId());
            return ResponseEntity.ok(savedUser);
        } catch (Exception e) {
            logger.error("Erro ao criar usuário: {}", e.getMessage());
            return ResponseEntity.badRequest().build();
        }
       
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> updateUser(@PathVariable Long id, @RequestBody Usuario user) {
            logger.info("Recebendo requisição para atualizar usuário com ID: {}", id);
        try{
            Usuario updatedUser = userService.updateUser(id, user);
            return ResponseEntity.ok(updatedUser);
        } catch (Exception e) {
            logger.error("Erro ao atualizar usuário: {}", e.getMessage());
            return ResponseEntity.notFound().build(); // Retorna 404 Not Found se o usuário não for encontrado
        }
    }

    // Método para deletar um usuário implementado com tratamento de exceção
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
       try{
            logger.info("Recebendo requisição para deletar usuário com ID: {}", id);
            userService.deleteUser(id);
            logger.info("Usuário com ID: {} deletado com sucesso", id);
            return ResponseEntity.noContent().build(); // Retorna 204 No Content
       } catch (RuntimeException e) {
            logger.error("Erro ao deletar usuário com ID: {}", id, e.getMessage());
            return ResponseEntity.notFound().build(); // Retorna 404 Not Found
       }
    }

}
