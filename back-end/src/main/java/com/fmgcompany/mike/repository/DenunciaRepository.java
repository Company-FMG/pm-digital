package com.fmgcompany.mike.repository;

import com.fmgcompany.mike.model.Denuncia;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface DenunciaRepository extends JpaRepository <Denuncia, UUID>{
}
