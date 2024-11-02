package com.fmgcompany.mike.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class DenunciaDTO {
    private UUID idDenuncia;
    private String tipo;
    private String relato;
    private String referencia;

    private UUID idVitima;
    private String nomeVitima;
    private String sexoVitima;
    private int idadeVitima;

    private UUID idSuspeito;
    private String nomeSuspeito;
    private String sexoSuspeito;
    private int idadeSuspeito;
    private String descricaoSuspeito;

    private UUID idGeolocation;
    private String local;
    private String cep;
    private double lat;
    private double lng;
}
