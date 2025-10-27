package com.bmt.api_library_only.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.bmt.api_library_only.model.Autor;
import com.bmt.api_library_only.repository.AutorRepository;
import com.bmt.api_library_only.service.AutorService;

@Service
public class AutorServiceImpl implements AutorService{

    private final Logger logger = LoggerFactory.getLogger(AutorServiceImpl.class);

    private final AutorRepository autorRepository;

    public AutorServiceImpl(AutorRepository autorRepository) {
        this.autorRepository = autorRepository;
    }

    /**
     * Método para obter todos os autores
     * @return Lista de autores
     */
    @Override
    public List<Autor> getAllAutors() {
        logger.info("Obtendo todos os autores do banco de dados");
        List<Autor> autores = autorRepository.findAll();
        return autores; // Retornar a lista de autores
    }

    @Override
    public Optional<Autor> getAutorId(Long id) {
        logger.info("");
        throw new UnsupportedOperationException("Unimplemented method 'getAutorId'");
    }

    /**
     * Método para salvar um autor
     * @return Autor salvo
     */
    @Override
    public Autor saveAutor(Autor autor) {
        logger.info("Salvando um novo autor no banco de dados");
        return autorRepository.save(autor);
    }

    @Override
    public Autor updateAutor(Long id, Autor autor) {
        logger.info("");
        throw new UnsupportedOperationException("Unimplemented method 'updateAutor'");
    }

    @Override
    public void deleteAutor(Long id) {
       
        //Autor autor = autorRepository.delete(id);
    }

    
}
