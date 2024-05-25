package com.fmgcompany.mike.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "ocorrencias")
public class Ocorrencia {
    @Id
    private String idOcorrencia;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idPolicial", referencedColumnName = "idPolicial")
    private Policial responsavelBO;
    private String relatorio;

    public Ocorrencia() {}

    public Ocorrencia(String idOcorrencia, Policial responsavelBO, String relatorio) {
        this.idOcorrencia = idOcorrencia;
        this.responsavelBO = responsavelBO;
        this.relatorio = relatorio;
    }

    //getters
    public String getIdOcorrencia() {
        return this.idOcorrencia;
    }

    public Policial getResponsavelBO() {
        return this.responsavelBO;
    }

    public String getRelatorio() {
        return this.relatorio;
    }

    //setters
    public void setRelatorio(String relatorio) {
        this.relatorio = relatorio;
    }

    public void setResponsavelBO(Policial responsavelBO) {
        this.responsavelBO = responsavelBO;
    }
}
