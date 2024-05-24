package com.fmgcompany.mike.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.Table;

@MappedSuperclass
public abstract class Pessoa {
    

    protected String cpf;
    protected String nome;
    protected int idade;
    protected String sexo;

    //getters
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

    public String getSexo() {
        return sexo;
    }

    //setters
    public void setSexo(String sexo) {
        this.sexo = sexo;
    }
    public void setIdade(int idade) {
        this.idade = idade;
    }
}