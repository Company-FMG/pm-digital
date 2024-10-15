package com.fmgcompany.mike.controller;

import com.fmgcompany.mike.model.Vitima;
import com.fmgcompany.mike.service.VitimaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/vitima")
public class VitimaController {
    @Autowired
    private VitimaService vitimaService;

    @GetMapping
    public List<Vitima> listarVitimas() {
        return vitimaService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vitima> getVitimaById(@PathVariable UUID id) {
        Optional<Vitima> vitima = vitimaService.findById(id);
        return vitima.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/nome/{nome}")
    public Vitima buscarPorNome(@PathVariable String nome){
        return vitimaService.findByNome(nome);
    }

    @PostMapping
    public Vitima createVitima(@RequestBody Vitima vitima) {
        return vitimaService.save(vitima);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Vitima> updateVitima(@PathVariable UUID id, @RequestBody Vitima vitimaDetails) {
        Optional<Vitima> vitima = vitimaService.findById(id);
        if (vitima.isPresent()) {
            Vitima updatedVitima = vitima.get();
            updatedVitima.setNome(vitimaDetails.getNome());
            updatedVitima.setIdade(vitimaDetails.getIdade());
            updatedVitima.setSexo(vitimaDetails.getSexo());
            return ResponseEntity.ok(vitimaService.save(updatedVitima));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVitima(@PathVariable UUID id) {
        vitimaService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
