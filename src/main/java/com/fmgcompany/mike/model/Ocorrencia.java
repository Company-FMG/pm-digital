package com.fmgcompany.mike.model;

public class Ocorrencia {
    private String idOcorrencia;
    private Policial responsavelBO;
    private String relatorio;

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
