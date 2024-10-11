package com.fmgcompany.mike.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Entity // classe jpa
@Table(name = "despachantes") // especifica o nome no bd (coloquem no plural, é uma convenção)
@Data // Gera getters, setters, toString, equals e hashCode
@NoArgsConstructor
@AllArgsConstructor
public class Despachante {
    //só precisa dos atributos
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID idAdmin;

    private String nome;
    private String matricula;
    private String email;
    private String senha;

    @OneToMany(mappedBy = "despachante")
    private List<Denuncia> denuncias;

}
