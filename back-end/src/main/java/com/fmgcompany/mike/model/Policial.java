package com.fmgcompany.mike.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import java.util.UUID;

@Entity
@Table(name="policiais")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Policial{
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private boolean comandante;
    private String nome;
    private String matricula;
    private String email;
    private String senha;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "id_viatura")
    private Viatura viatura;

    @Override
    public String toString() {
        return "Policial{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                '}';
    }
}
