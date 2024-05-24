package com.fmgcompany.mike.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "viaturas")
public class Viatura {
    @Id
    @Column(name = "id_viatura")
    private String idViatura;
    @OneToMany(mappedBy = "id_policiais",cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Policial> policiais = new ArrayList<Policial>();
    private String placa;
    private String modelo;
    private String marca;
    private String estado;

    public Viatura(){}

    public Viatura(String idViatura, ArrayList<Policial>policiais, String placa, String modelo, String marca, String estado) {
        this.idViatura = idViatura;
        this.policiais = policiais;
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
        this.estado = estado;
    }

    public String getIdViatura() {
        return idViatura;
    }

    public String getModelo() {
        return modelo;
    }

    public String getMarca() {
        return marca;
    }

    public String getEstado() {
        return estado;
    }

    public String getPlaca() {
        return placa;
    }

    public List<Policial> getPoliciais() {
        return policiais;
    }

    public void setPoliciais(List<Policial> policiais) {
        this.policiais = policiais;
    }
}
