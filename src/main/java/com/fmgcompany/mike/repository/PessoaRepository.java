package com.fmgcompany.mike.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fmgcompany.mike.model.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, String>{
    //sem métodos a mais
}