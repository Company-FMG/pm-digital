package com.fmgcompany.mike.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.fmgcompany.mike.service.PolicialService;
import com.fmgcompany.mike.model.Policial;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
@RequestMapping("/api/policiais")
public class PolicialController {
    @Autowired
    private PolicialService policialService;

    @GetMapping
    public List<Policial> getAllPoliciais() {
        return policialService.findAll();
    }
    @GetMapping("/email")
    public List<String> getEmail(){
        return policialService.findByEmail();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Policial> getPolicialById(@PathVariable UUID id) {
        Optional<Policial> policial = policialService.findById(id);
        return policial.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/nome/{nome}")
    public Policial buscarPorNome(@PathVariable String nome){
        return policialService.findByNome(nome);
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
