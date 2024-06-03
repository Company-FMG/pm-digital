package com.fmgcompany.mike.model;

import lombok.ToString;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
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
    
    @OneToOne
    @JoinColumn(name = "idPolicial", referencedColumnName = "idPolicial")
    @Setter
    private Policial responsavelBO;
    
    @Setter
    private String relatorio;
    
    @Setter
    private LocalTime inicio;
    
    @Setter
    private LocalTime fim;
    private Duration duracao = Duration.between(inicio, fim);

    public Ocorrencia() {}

    public Ocorrencia(Policial responsavelBO, String relatorio) {
        this.responsavelBO = responsavelBO;
        this.relatorio = relatorio;
    }

}
