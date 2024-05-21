package com.fmgcompany.mike.model;

public abstract class Pessoa {
    protected String nome;
    protected String cpf;
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