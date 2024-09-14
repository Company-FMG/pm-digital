package com.fmgcompany.mike.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@Entity
@Table(name="policiais")
public class Policial extends Pessoa {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID idPolicial;

    @Setter
    private String cargo;

    @JsonManagedReference
    @Setter
    @OneToMany(mappedBy = "responsavelBo")
    private List<Ocorrencia> ocorrencias = new ArrayList<Ocorrencia>();

    @Setter
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "idViatura")
    private Viatura viatura;
    
    public Policial(){}

    public Policial(String nome, String cpf, String email, int idade, String sexo,String cargo) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.idade = idade;
        this.sexo = sexo;
        this.cargo = cargo;
    }
}
