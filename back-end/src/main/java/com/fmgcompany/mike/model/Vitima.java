package com.fmgcompany.mike.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
public class Vitima{
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String nome;
    private String sexo;
    private int idade;

    @OneToOne(mappedBy = "vitima")
    @JoinColumn(name="denuncia_id")
    @JsonBackReference
    private Denuncia denuncia;
}
