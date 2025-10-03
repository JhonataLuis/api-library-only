package com.bmt.library_only.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "livro_autor")
public class LivroAutor {

    private Long livroId;
    private Long autorId;

    public void setLivroId(Long livroId) {
        this.livroId = livroId;
    }

    public Long getLivroId() {
        return livroId;
    }

    public void setAutorId(Long autorId) {
        this.autorId = autorId;
    }

    public Long getAutorId() {
        return autorId;
    }

}
