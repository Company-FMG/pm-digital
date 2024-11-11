package com.fmgcompany.mike.model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "suspeitos")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Suspeito{
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String nome;
    private String sexo;
    private int idade;
    private String descricao;

    @OneToOne(mappedBy = "suspeito")
    @JoinColumn(name="denuncia_id")
    @JsonBackReference
    private Denuncia denuncia;
}
