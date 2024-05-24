package com.fmgcompany.mike.controller;

import java.util.List;
import java.util.Optional;

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
    public List<Policial> getAllUsers() {
        return policialService.findAll();
    }

    @GetMapping("/{idPolicial}")
    public ResponseEntity<Policial> getUserById(@PathVariable String id) {
        Optional<Policial> policial = policialService.findById(id);
        return policial.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Policial createPolicial(@RequestBody Policial policial) {
        return policialService.save(policial);
    }

    @PutMapping("/{idPolicial}")
    public ResponseEntity<Policial> updatePolicial(@PathVariable String id, @RequestBody Policial policialDetails) {
        Optional<Policial> policial = policialService.findById(id);
        if (policial.isPresent()) {
            Policial updatedPolicial = policial.get();
            updatedPolicial.setNome(policialDetails.getNome());
            updatedPolicial.setIdade(policialDetails.getIdade());
            updatedPolicial.setSexo(policialDetails.getSexo());
            updatedPolicial.setCargo(policialDetails.getCargo());
            updatedPolicial.setViatura(policialDetails.getViatura());
            return ResponseEntity.ok(policialService.save(updatedPolicial));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{idPolicial}")
    public ResponseEntity<Void> deletePolicial(@PathVariable String id) {
        policialService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
