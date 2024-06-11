package com.fmgcompany.mike.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "suspeitos")
public class Suspeito extends Pessoa{
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @JsonManagedReference
    @ManyToOne
    private Denuncia denuncia;

    @Getter
    @Setter
    protected String descricaoSuspeito;
}
