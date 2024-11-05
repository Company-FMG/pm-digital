package com.fmgcompany.mike.repository;
import com.fmgcompany.mike.model.Despachante;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import com.fmgcompany.mike.model.Policial;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface PolicialRepository extends JpaRepository<Policial, UUID>{
    Optional<Policial> findByMatricula(String matricula);
}
