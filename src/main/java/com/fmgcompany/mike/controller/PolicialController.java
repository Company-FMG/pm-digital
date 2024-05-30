package com.fmgcompany.mike.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fmgcompany.mike.service.PolicialService;
import com.fmgcompany.mike.model.Policial;

@RestController
@RequestMapping("/api/policiais")
public class PolicialController {
    @Autowired
    private PolicialService policialService;

    @GetMapping
    public List<Policial> getAllPoliciais() {
        return policialService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Policial> getPolicialById(@PathVariable UUID id) {
        Optional<Policial> policial = policialService.findById(id);
        return policial.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Policial createPolicial(@RequestBody Policial policial) {
        return policialService.save(policial);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Policial> updatePolicial(@PathVariable UUID id, @RequestBody Policial policialDetails) {
        Optional<Policial> policial = policialService.findById(id);
        if (policial.isPresent()) {
            Policial updatedPolicial = policial.get();
            updatedPolicial.setNome(policialDetails.getNome());
            updatedPolicial.setIdade(policialDetails.getIdade());
            updatedPolicial.setEmail(policialDetails.getEmail());
            updatedPolicial.setSexo(policialDetails.getSexo());
            updatedPolicial.setCargo(policialDetails.getCargo());
            updatedPolicial.setViatura(policialDetails.getViatura());
            return ResponseEntity.ok(policialService.save(updatedPolicial));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePolicial(@PathVariable UUID id) {
        policialService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
