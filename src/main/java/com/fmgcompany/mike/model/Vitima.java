package com.fmgcompany.mike.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "vitimas")
public class Vitima extends Pessoa{
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
}
