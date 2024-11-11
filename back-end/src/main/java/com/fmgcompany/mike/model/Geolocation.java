package com.fmgcompany.mike.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="geolocations")
public class Geolocation {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String local;
    private String cep;
    private double lat;
    private double lng;

    @OneToOne(mappedBy = "geolocation")
    @JsonBackReference
    private Denuncia denuncia;
}
