package com.fmgcompany.mike.model;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@MappedSuperclass
public abstract class Pessoa {

    protected String cpf;
    protected String nome;
    protected String email;
    protected int idade;
    protected String sexo;

}