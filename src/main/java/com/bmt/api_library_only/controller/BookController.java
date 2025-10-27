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
import org.springframework.web.client.HttpServerErrorException;

import com.bmt.api_library_only.model.Livro;
import com.bmt.api_library_only.service.LivroService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

    private static final Logger logger = LoggerFactory.getLogger(BookController.class);

    private final LivroService livroService;

    public BookController(LivroService livroService){
        this.livroService = livroService;
    }

    @GetMapping
    public ResponseEntity<List<Livro>> listBooks(){
        List<Livro> books = livroService.getAllLivros();
        return ResponseEntity.ok(books);
        
    }

    @PostMapping
    public ResponseEntity<?> createdBook(/*@Valid*/ @RequestBody Livro livro){

        try{
            logger.info("Criando novo Book: {}", livro.getTitulo());

            Livro book = livroService.saveLivro(livro);
            return ResponseEntity.ok(book);

        } catch (RuntimeException e){
            logger.error("Erro ao criar livro: {}", e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception ex){
            logger.error("Erro inesperado ao criar livro: {}", ex.getMessage());
            return ResponseEntity.internalServerError().body("Erro interno do servidor");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateBook(@PathVariable Long id, @Valid @RequestBody Livro livro){

        try{
            Livro bookUpdate = livroService.updateLivro(id, livro);
            return ResponseEntity.ok(bookUpdate);

        } catch (RuntimeException e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Long id){

        try {
            livroService.deleteLivro(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    
}
