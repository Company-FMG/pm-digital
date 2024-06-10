package com.fmgcompany.mike.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.ToString;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;
import java.time.Duration;

@ToString
@Getter

@Entity
@Table(name = "ocorrencias")
public class Ocorrencia {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String idOcorrencia;

    @JsonBackReference
    @ManyToOne
    @Setter
    private Policial responsavelBo;
    
    @Setter
    private String relatorio;
    
    @Setter
    private LocalTime inicio;
    
    @Setter
    private LocalTime fim;
    private Duration duracao;

    public Ocorrencia() {}

    public Ocorrencia(Policial responsavelBo, String relatorio) {
        this.responsavelBo = responsavelBo;
        this.relatorio = relatorio;
    }

    public Ocorrencia(Policial responsavelBo, String relatorio, LocalTime inicio, LocalTime fim) {
        this.responsavelBo = responsavelBo;
        this.relatorio = relatorio;
        this.inicio = inicio;
        this.fim = fim;
    }

    public Duration getDuracao() {
        if (inicio != null && fim != null) {
            return Duration.between(inicio, fim);
        } else {
            return Duration.ZERO; 
        }
    }
}
