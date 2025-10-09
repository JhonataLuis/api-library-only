package com.bmt.api_library_only.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bmt.api_library_only.model.Autor;
import com.bmt.api_library_only.service.AutorService;

@RestController
@RequestMapping("/api/autors")
@CrossOrigin(origins = "http://localhost:3000") // Ajuste conforme a origem do seu frontend
public class AutorController {

    private final Logger logger = LoggerFactory.getLogger(AutorController.class);
    private final AutorService autorService;

    public AutorController(AutorService autorService){
        this.autorService = autorService;
    }

    @GetMapping("/test")
    public String test(){
        logger.info("Teste de conexão bem sucedida!");
        return "Conexão bem sucedida!" + java.time.LocalDateTime.now();
    }

    @GetMapping
    public ResponseEntity<List<Autor>> getAllAutors() {
        logger.info("Buscando todos os autores");
        List<Autor> autores = autorService.getAllAutors();
        return ResponseEntity.ok(autores); // Retornar a lista de autores
    }

    @PostMapping
    public ResponseEntity<Autor> createAutor(@RequestBody Autor autor) {
        logger.info("Recebendo requisição para criar autor: {}", autor.getNome());
        try {
            Autor savedAutor = autorService.saveAutor(autor);
            logger.info("Autor criado com ID: {}", savedAutor.getId());
            return ResponseEntity.ok(savedAutor);
        } catch (Exception e) {
            logger.error("Erro ao criar autor: {}", e.getMessage());
            return ResponseEntity.badRequest().build(); // Retornar 400 Bad Request em caso de erro
        }
    }
}
