package com.fmgcompany.mike.repository;

import com.fmgcompany.mike.model.Despachante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface DespachanteRepository extends JpaRepository<Despachante, UUID> {
    Optional<Despachante> findByMatricula(String matricula);
}
