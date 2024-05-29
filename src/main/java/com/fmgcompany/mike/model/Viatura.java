package com.fmgcompany.mike.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@Entity
@Table(name = "viaturas")
public class Viatura {
    @Id
    @Column(name = "id_viatura")
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID idViatura;
    @JsonManagedReference
    @Setter
    @OneToMany(mappedBy = "viatura")
    private List<Policial> policiais = new ArrayList<Policial>();
    @Setter
    private String placa;
    @Setter
    private String modelo;
    @Setter
    private String marca;
    @Setter
    private String estado;

    public Viatura(){}

    public Viatura(String placa, String modelo, String marca, String estado) {
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
        this.estado = estado;
    }

}
