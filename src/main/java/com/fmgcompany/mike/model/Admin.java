package com.fmgcompany.mike.model;

import jakarta.persistence.*;
import lombok.Setter;

@Entity
@Table(name="admin")
public class Admin extends Pessoa {
    @Id
    private String idAdmin;

    public Admin () {}

    public Admin (String idAdmin, String cpf, String nome, String email, int idade, String sexo ) {
        this.idAdmin = idAdmin;
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.sexo = sexo;
    }

    //getters
    public String getIdAdmin () {
        return idAdmin;
    }
    public String getNome() {
        return super.getNome();
    }
    public String getEmail() {
        return super.getNome();
    }

    //setters

}
