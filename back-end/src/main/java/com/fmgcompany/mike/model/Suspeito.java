package com.fmgcompany.mike.model;

import java.util.UUID;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "suspeitos")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Suspeito extends Denuncia {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String nome;
    private String sexo;
    private int idade;

    @OneToOne(mappedBy = "suspeitos")
    @JoinColumn(name="idDenuncia")
    private Denuncia denuncia;
}
