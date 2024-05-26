package com.fmgcompany.mike.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="policiais")
public class Policial extends Pessoa {
    @Id
    private String idPolicial;
    private String cargo;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idViatura")
    private Viatura viatura;
    
    public Policial(){}

    public Policial(String nome, String cpf, String email, int idade, String sexo, String idPolicial, String cargo, Viatura viatura) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.idade = idade;
        this.sexo = sexo;
        this.idPolicial = idPolicial;
        this.cargo = cargo;
        this.viatura = viatura;
    }

    @Override
    public String getNome() {
        return super.getNome();
    }

    public String getEmail() {
        return super.getEmail();
    }

    public String getIdPolicial() {
        return idPolicial;
    }

    public String getCargo() {
        return cargo;
    }

    public Viatura getViatura() {
        return viatura;
    }

    //setters
    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public void setViatura(Viatura viatura) {
        this.viatura = viatura;
    }
}
