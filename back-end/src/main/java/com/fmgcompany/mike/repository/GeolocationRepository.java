package com.fmgcompany.mike.repository;

import com.fmgcompany.mike.model.Geolocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface GeolocationRepository extends JpaRepository<Geolocation, UUID> {
}
