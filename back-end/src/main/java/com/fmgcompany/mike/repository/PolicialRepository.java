package com.fmgcompany.mike.repository;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import com.fmgcompany.mike.model.Policial;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface PolicialRepository extends JpaRepository<Policial, UUID>{
    @Query(value = "SELECT email FROM Policial")
    List<String> findByEmail();

    @Query(value = "SELECT p FROM Policial p where p.nome = :nome")
    Policial findByNome(@Param("nome") String nome);
}
