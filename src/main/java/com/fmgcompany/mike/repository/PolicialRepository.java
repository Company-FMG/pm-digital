package com.fmgcompany.mike.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fmgcompany.mike.model.Policial;

public interface PolicialRepository extends JpaRepository<Policial, String>{
    //sem métodos adicionais
}
