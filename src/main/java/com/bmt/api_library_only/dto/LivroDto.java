package com.bmt.api_library_only.dto;

import java.util.List;


public class LivroDto {
    
    private String titulo;
    private String isbn;
    private Integer anoPublicacao;
    private Integer quantidadeTotal;
    private String imagemUrl;
    private String nomeImagem;
    private List<Long> autoresIds;

    // Construtores
    public LivroDto() {}

    public LivroDto(String titulo, String isbn, Integer anoPublicacao, 
                             Integer quantidadeTotal, String imagemUrl, String nomeImagem, 
                             List<Long> autoresIds) {
        this.titulo = titulo;
        this.isbn = isbn;
        this.anoPublicacao = anoPublicacao;
        this.quantidadeTotal = quantidadeTotal;
        this.imagemUrl = imagemUrl;
        this.nomeImagem = nomeImagem;
        this.autoresIds = autoresIds;
    }

    // Getters e Setters
    public String getTitulo() { return titulo; }
    public void setTitulo(String titulo) { this.titulo = titulo; }

    public String getIsbn() { return isbn; }
    public void setIsbn(String isbn) { this.isbn = isbn; }

    public Integer getAnoPublicacao() { return anoPublicacao; }
    public void setAnoPublicacao(Integer anoPublicacao) { this.anoPublicacao = anoPublicacao; }

    public Integer getQuantidadeTotal() { return quantidadeTotal; }
    public void setQuantidadeTotal(Integer quantidadeTotal) { this.quantidadeTotal = quantidadeTotal; }

    public String getImagemUrl() { return imagemUrl; }
    public void setImagemUrl(String imagemUrl) { this.imagemUrl = imagemUrl; }

    public String getNomeImagem() { return nomeImagem; }
    public void setNomeImagem(String nomeImagem) { this.nomeImagem = nomeImagem; }

    public List<Long> getAutoresIds() { return autoresIds; }
    public void setAutoresIds(List<Long> autoresIds) { this.autoresIds = autoresIds; }
}
