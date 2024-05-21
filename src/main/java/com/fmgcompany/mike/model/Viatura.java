package com.fmgcompany.mike.model;

import java.util.ArrayList;
import java.util.List;

public class Viatura {
    private String idViatura;
    private List policiais = new ArrayList<Policial>();
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

    public List getPoliciais() {
        return policiais;
    }

    public void setPoliciais(List policiais) {
        this.policiais = policiais;
    }
}
