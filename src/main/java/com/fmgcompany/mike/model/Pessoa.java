package com.fmgcompany.mike.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public abstract class Pessoa {
    
    @Id
    protected String cpf;
    protected String nome;
    protected int idade;
    protected String sexo;

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }
    
    public int getIdade() {
        return idade;
    }
    public void setIdade(int idade) {
        this.idade = idade;
    }
}