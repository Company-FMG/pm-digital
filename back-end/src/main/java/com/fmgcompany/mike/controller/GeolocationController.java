package com.fmgcompany.mike.controller;

import com.fmgcompany.mike.model.Geolocation;
import com.fmgcompany.mike.service.GeolocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/geolocations")
public class GeolocationController {
    @Autowired
    private GeolocationService geolocationService;

    @GetMapping
    public List<Geolocation> listarGeolocations(){
        return this.geolocationService.listarTodas();
    }

    @GetMapping("/{id}")
    public Optional<Geolocation> buscarGeolocation(@PathVariable UUID id) {
        return this.geolocationService.buscarPorId(id);
    }

    @PostMapping
    public Geolocation criarGeolocation(@RequestBody Geolocation geolocation) {
        return this.geolocationService.criar(geolocation);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGeolocation(@PathVariable UUID id){
        this.geolocationService.deletarPorId(id);
        return ResponseEntity.noContent().build();
    }
}
