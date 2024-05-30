package com.fmgcompany.mike.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
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
    /*
    @Override
    public String getNome() {
        return super.getNome();
    }
    public String getEmail() {
        return super.getEmail();
    }

     */
}
