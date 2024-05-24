package com.fmgcompany.mike.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fmgcompany.mike.model.Ocorrencia;

public interface OcorrenciaRepository extends JpaRepository<Ocorrencia, String>{
    //sem métodos adicionais
}