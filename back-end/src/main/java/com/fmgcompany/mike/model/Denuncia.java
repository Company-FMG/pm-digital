package com.fmgcompany.mike.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="denuncias")
public class Denuncia {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String tipo_violencia;
    private String relato;
    private String local;
    private int n_local;
    private String cep;


    @OneToOne
    @JoinColumn(name = "vitima_id", referencedColumnName = "id")
    private Vitima vitima;

    @OneToOne
    @JoinColumn(name = "suspeito_id",referencedColumnName = "id")
    private Suspeito suspeito;

    @ManyToOne
    private Despachante despachante;
}
