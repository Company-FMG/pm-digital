package com.fmgcompany.mike.model;

public class Policial extends Pessoa {
    private String idPolicial;
    private String cargo;
    
    public Policial(){}

    public Policial(String nome, String cpf, int idade, String sexo, String idPolicial, String cargo) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
        this.idPolicial = idPolicial;
        this.cargo = cargo;
    }

    @Override
    public String getNome() {
        return super.getNome();
    }
    
    public String getIdPolicial() {
        return idPolicial;
    }

    public String getCargo() {
        return cargo;
    }
}
