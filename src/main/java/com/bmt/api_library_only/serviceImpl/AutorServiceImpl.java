package com.bmt.api_library_only.serviceImpl;

import java.util.List;

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

    @Override
    public List<Autor> getAllAutors() {
        logger.info("Obtendo todos os autores do banco de dados");
        return autorRepository.findAll();
    }

    @Override
    public Autor saveAutor(Autor autor) {
        logger.info("Salvando um novo autor no banco de dados");
        return autorRepository.save(autor);
    }

}
