package com.fmgcompany.mike.model;

import jakarta.persistence.*;
import lombok.Setter;

@Entity
@Table(name="denuncias")
public class Denuncia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    protected String situacaoInformada;

    @Column
    protected String endereco;

    @Column
    protected String mapa;

    @Column
    protected String vitima;

    @Column
    protected String status;

    @Column
    protected String infoCena;

    public Denuncia(){}

    public Denuncia(long id, String situacaoInformada, String endereco, String mapa, String vitima, String status, String infoCena) {
        this.id = id;
        this.situacaoInformada = situacaoInformada;
        this.endereco = endereco;
        this.mapa = mapa;
        this.vitima = vitima;
        this.status = status;
        this.infoCena = infoCena;
    }

    //analizar metodo
    @Column
    protected void encaminharOcorrencia(){};

    public long getId() {
        return id;
    }

    public String getSituacaoInformada() {
        return situacaoInformada;
    }

    public String getEndereco() {
        return endereco;
    }

    public String getMapa() {
        return mapa;
    }

    public String getVitima() {
        return vitima;
    }

    public String getStatus() {
        return status;
    }

    public String getInfoCena() {
        return infoCena;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setSituacaoInformada(String situacaoInformada) {
        this.situacaoInformada = situacaoInformada;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public void setMapa(String mapa) {
        this.mapa = mapa;
    }

    public void setVitima(String vitima) {
        this.vitima = vitima;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setInfoCena(String infoCena) {
        this.infoCena = infoCena;
    }
}
