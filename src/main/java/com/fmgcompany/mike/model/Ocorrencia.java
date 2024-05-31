package com.fmgcompany.mike.model;

import lombok.ToString;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.time.LocalDateTime;

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
    private LocalDateTime inicio;
    
    @Setter
    private LocalDateTime fim;

    public Ocorrencia() {}

    public Ocorrencia(Policial responsavelBO, String relatorio) {
        this.responsavelBO = responsavelBO;
        this.relatorio = relatorio;
    }

}
