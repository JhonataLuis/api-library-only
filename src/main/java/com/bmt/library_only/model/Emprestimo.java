package com.bmt.library_only.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "emprestimo")
public class Emprestimo {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="emprestimo_seq")
    @SequenceGenerator(name="emprestimo_seq", sequenceName="emprestimo_seq", allocationSize=1)
    private Long id;

    private LocalDateTime dataEmprestimo;
    private LocalDateTime dataDevolucao;

    @Column(nullable=false, length=20)
    private String status; // "EMPRESTADO", "DEVOLVIDO", "ATRASADO"

    // Relacionamento N:1 com Usuario
    @ManyToOne
    @JoinColumn(name="usuario_id", nullable=false)
    private Usuario usuario;

    // Relacionamento N:1 com Livro
    @ManyToOne
    @JoinColumn(name="livro_id", nullable=false)
    private Livro livro;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setDataEmprestimo(LocalDateTime dataEmprestimo) {
        this.dataEmprestimo = dataEmprestimo;
    }

    public LocalDateTime getDataEmprestimo() {
        return dataEmprestimo;
    }

    public void setDataDevolucao(LocalDateTime dataDevolucao) {
        this.dataDevolucao = dataDevolucao;
    }

    public LocalDateTime getDataDevolucao() {
        return dataDevolucao;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setLivro(Livro livro) {
        this.livro = livro;
    }

    public Livro getLivro() {
        return livro;
    }

    



}
