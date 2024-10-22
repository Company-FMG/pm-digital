package com.fmgcompany.mike.repository;

import com.fmgcompany.mike.model.Suspeito;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SuspeitoRepository extends JpaRepository<Suspeito, UUID> {
}
