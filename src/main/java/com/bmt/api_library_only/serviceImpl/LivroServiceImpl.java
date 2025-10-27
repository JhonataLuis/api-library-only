package com.bmt.api_library_only.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.bmt.api_library_only.repository.LivroRepository;
import com.bmt.api_library_only.service.LivroService;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bmt.api_library_only.model.Livro;



@Service
@Transactional
public class LivroServiceImpl implements LivroService{

    private final Logger logger = LoggerFactory.getLogger(LivroServiceImpl.class);
    private final LivroRepository livroRepository;


    public LivroServiceImpl(LivroRepository livroRepository){
        this.livroRepository = livroRepository;
    }

    @Transactional(readOnly = true)
    public List<Livro> getAllLivros(){ // Busca lista de todos os livros
        logger.info("Buscando todos os livros {} ...");

        try {
            List<Livro> livros = livroRepository.findAll();
            logger.info("Encontrados {} livros", livros.size());
            return livros;
        } catch (Exception e) {
            logger.error("Erro ao buscar todos os livros: {}", e.getMessage());
            throw new RuntimeException("Erro ao buscar livros: " + e.getMessage());
        }
    }

    @Transactional(readOnly=true)
    public Optional<Livro> getLivroById(Long id){ // Busca pelo id do livro selecionado
        logger.info("Buscando livro por ID: {}", id);

        try{
            Optional<Livro> livro = livroRepository.findById(id);
            if(livro.isPresent()){
                logger.info("Livro encontrado: {} (ID: {})", livro.get().getTitulo(), id);
            } else {
                logger.warn("Livro não encontrado com ID: {}", id);
            }
            return livro;
        } catch (Exception e){
            logger.error("Erro ao buscar livro por ID {}: {}", id, e.getMessage());
            throw new RuntimeException("Erro ao buscar livro: " + e.getMessage());
        }
    }

    public Livro saveLivro(Livro livro){ // Ação para salvar um livro nos sistema, banco de dados
        logger.info("Salvando novo livro: {}", livro.getTitulo());

        try{
            // Validação: Campos obrigatórios
            if(livro.getTitulo() == null || livro.getTitulo().trim().isEmpty()){
                throw new RuntimeException("Título do livro é obrigatório");
            }

            // Inicializar quantidades se não informadas
            if(livro.getQuantidadeTotal() == null){
                livro.setQuantidadeTotal(1);
                logger.info("Quantidade total não informada, definido como 1");
            }

            if(livro.getQuantidadeDisponivel() == null){
                livro.setQuantidadeDisponivel(livro.getQuantidadeTotal());
                logger.info("Quantidade disponível não informada, definindo igual á quantidade total");
            }

            // Validação: Quantidade disponível não pode ser maior que total
            if (livro.getQuantidadeDisponivel() > livro.getQuantidadeTotal()) {
                String errorMsg = String.format(
                    "Quantidade disponível (%d) não pode ser maior que quantidade total (%d)",
                    livro.getQuantidadeDisponivel(), livro.getQuantidadeTotal()
                );
                logger.error(errorMsg);
                throw new RuntimeException(errorMsg);
            }

            // Validação: Quantidades não podem ser negativas
            if (livro.getQuantidadeTotal() < 0 || livro.getQuantidadeDisponivel() < 0) {
                throw new RuntimeException("Quantidades não podem ser negativas");
            }

            // Definir imagem padrão se não for fornecidas
            if(livro.getImagemUrl() == null || livro.getImagemUrl().trim().isEmpty()){
                livro.setImagemUrl("/imagens/livro-sem-capa.jpg");
                logger.info("URL da imagem não fornecidada, usando imagem padrão");
            }

            Livro savedLivro = livroRepository.save(livro);
            logger.info("Livro salvo com sucesso: {} (ID: {})", savedLivro.getTitulo(), savedLivro.getId());
            return savedLivro;

        } catch (RuntimeException e){
            // Re-lançar exceções de negócio
            throw e;
        } catch (Exception e){
             logger.error("Erro ao salvar livro: {}", e.getMessage());
            throw new RuntimeException("Erro interno ao salvar livro: " + e.getMessage());
        }
    }

    @Override
    public Livro updateLivro(Long id, Livro livro){// Ação para atualizar um livro
        logger.info("Tentando atualizar o Livro no banco de dados: {}" + id);

        Livro book = livroRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Livro não encontrado com ID :" + id));

        book.setTitulo(livro.getTitulo());
        book.setIsbn(livro.getIsbn());
        book.setAnoPublicacao(livro.getAnoPublicacao());
        
        livroRepository.save(book);
        logger.info("Livro atualizado no banco de dados com ID: {}" +id);

        return book;
    }

    @Override
    public void deleteLivro(Long id){
        
        try{

            //livroRepository.delete(id);

        } catch (Exception e){
            throw new RuntimeException("Erro ao deletar um livro: " + e.getMessage());
        }
    }
}
