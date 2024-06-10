package com.fmgcompany.mike.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
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

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "vitima_id", referencedColumnName = "id")
    private Vitima vitima;

    @JsonBackReference
    @OneToMany
    private List<Suspeito> suspeitos;

    @Column
    protected String status;

    @Column
    protected String infoCena;
}
