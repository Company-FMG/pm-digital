package com.fmgcompany.mike.repository;

import com.fmgcompany.mike.model.Viatura;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface ViaturaRepository extends JpaRepository<Viatura, UUID> {
    Optional<Viatura> findByPlaca(String placa);
}
