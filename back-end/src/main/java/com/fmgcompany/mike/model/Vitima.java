package com.fmgcompany.mike.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "vitimas")
public class Vitima extends Pessoa{
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @JsonManagedReference
    @OneToMany(mappedBy = "vitima")
    private List<Denuncia> denuncias = new ArrayList<>();
}
