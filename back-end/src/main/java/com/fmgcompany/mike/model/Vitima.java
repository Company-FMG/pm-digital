package com.fmgcompany.mike.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Table(name = "vitimas")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vitima extends Denuncia {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String nome;
    private String sexo;
    private int idade;

    @OneToOne(mappedBy = "vitimas")
    @JoinColumn(name="idDenuncia")
    private Denuncia denuncia;
}
