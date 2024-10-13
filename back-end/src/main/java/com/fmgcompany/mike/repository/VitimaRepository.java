package com.fmgcompany.mike.repository;

import com.fmgcompany.mike.model.Vitima;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface VitimaRepository extends JpaRepository<Vitima, UUID> {
    @Query(value = "SELECT email FROM Vitima")
    List<String> findByEmail();

    @Query(value = "SELECT p FROM Vitima p where p.nome = :nome")
    Vitima findByNome(@Param("nome") String nome);
}
