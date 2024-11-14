package com.fmgcompany.mike.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @OneToMany(mappedBy = "viatura", fetch = FetchType.EAGER)
    private List<Policial> policiais;

    @OneToOne
    @JoinColumn(name = "denuncia_id", referencedColumnName = "id")
    @JsonManagedReference
    private Denuncia denuncia;

    @Override
    public String toString() {
        return "Viatura{" +
                "id=" + id +
                ", placa='" + placa + '\'' +
                '}';
    }
}


