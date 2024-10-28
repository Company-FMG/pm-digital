package com.fmgcompany.mike.service;

import com.fmgcompany.mike.model.Geolocation;
import com.fmgcompany.mike.repository.GeolocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class GeolocationService {
    @Autowired
    private GeolocationRepository geolocationRepository;

    public List<Geolocation> listarTodas() {
        return this.geolocationRepository.findAll();
    }

    public Optional<Geolocation> buscarPorId(UUID id) {
        return this.geolocationRepository.findById(id);
    }

    public Geolocation criar (Geolocation geolocation) {
        return this.geolocationRepository.save(geolocation);
    }

    public void deletarPorId(UUID id) {
        this.geolocationRepository.deleteById(id);
    }
}
