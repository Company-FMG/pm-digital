package com.fmgcompany.mike.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Table(name = "admin")
public class Admin extends Pessoa {
    //attributes
    @Id
    private String idAdmin;

    //constructors
    public Admin () {}

    public Admin (String idAdmin, String cpf, String nome, String email, int idade, String sexo) {
        this.idAdmin = idAdmin;
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.sexo = sexo;
    }

    //getters
    public String getIdAdmin() {
        return idAdmin;
    }
    public String getNome() {
        return super.getNome();
    }
    public String getEmail() {
        return super.getEmail();
    }

}
