package com.fmgcompany.mike.controller;

import com.fmgcompany.mike.model.Suspeito;
import com.fmgcompany.mike.service.SuspeitoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/suspeitos")
public class SuspeitoController {
    @Autowired
    private SuspeitoService suspeitoService;

    @GetMapping
    public List<Suspeito> listarSuspeitos() {
        return suspeitoService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Suspeito> getSuspeitoById(@PathVariable UUID id) {
        Optional<Suspeito> suspeito = suspeitoService.findById(id);
        return suspeito.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Suspeito createSuspeito(@RequestBody Suspeito suspeito) {
        return suspeitoService.save(suspeito);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Suspeito> updateSuspeito(@PathVariable UUID id, @RequestBody Suspeito suspeitoDetails) {
        Optional<Suspeito> suspeito = suspeitoService.findById(id);
        if (suspeito.isPresent()) {
            Suspeito updatedSuspeito = suspeito.get();
            updatedSuspeito.setNome(suspeitoDetails.getNome());
            updatedSuspeito.setIdade(suspeitoDetails.getIdade());
            updatedSuspeito.setSexo(suspeitoDetails.getSexo());
            return ResponseEntity.ok(suspeitoService.save(updatedSuspeito));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSuspeito(@PathVariable UUID id) {
        suspeitoService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
