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
    @JoinColumn(name = "policial_id",referencedColumnName = "id")
    private List<Policial> policiais;

    @OneToOne
    @JoinColumn(name = "denuncia_id",referencedColumnName = "id")
    private Denuncia denuncia;
}
