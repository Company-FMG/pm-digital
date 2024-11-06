package com.fmgcompany.mike.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "viaturas")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Viatura {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String placa;

    @OneToMany
    private List<Policial> policiais;

    @OneToOne
    private Denuncia denuncia;

    public void setDenuncia(Denuncia denuncia) {
        this.denuncia = denuncia;
    }

}
