package com.fmgcompany.mike.repository;

import com.fmgcompany.mike.model.Denuncia;
import com.fmgcompany.mike.model.Status;
import com.fmgcompany.mike.model.Viatura;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface DenunciaRepository extends JpaRepository <Denuncia, UUID>{
    List<Denuncia> findByStatus(Status status);
    Optional<Denuncia> findByViatura(Viatura viatura);
}
