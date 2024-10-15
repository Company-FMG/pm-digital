package com.fmgcompany.mike.repository;

import com.fmgcompany.mike.model.Denuncia;
import com.fmgcompany.mike.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface DenunciaRepository extends JpaRepository <Denuncia, UUID>{
    List<Denuncia> findByStatus(Status status);
}
