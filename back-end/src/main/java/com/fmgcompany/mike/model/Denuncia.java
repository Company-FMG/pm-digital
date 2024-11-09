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
    private String tipo;
    private String relato;
    private String referencia;

    @Enumerated(EnumType.STRING)
    private Status status;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "vitima_id", referencedColumnName = "id")
    private Vitima vitima;

    @ManyToOne
    private Despachante despachante;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "suspeito_id",referencedColumnName = "id")
    private Suspeito suspeito;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "geolocation_id", referencedColumnName = "id")
    private Geolocation geolocation;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "viatura_id", referencedColumnName = "id")
    private Viatura viatura;
}
