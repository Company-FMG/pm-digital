package com.fmgcompany.mike.controller;

import com.fmgcompany.mike.model.Despachante;
import com.fmgcompany.mike.service.DespachanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/despachantes") //sem /api e no plural
public class DespachanteController {
    @Autowired
    private DespachanteService despachanteService;

    @GetMapping
    public List<Despachante> readAll(){
        return this.despachanteService.listarTodos();
    }

    @GetMapping("/{id}")
    public Optional<Despachante> readById(@PathVariable UUID id){
        return this.despachanteService.buscarPorID(id);
    }

    @PostMapping
    public Despachante create(@RequestBody Despachante despachante){
        return this.despachanteService.criar(despachante);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Despachante> update(@PathVariable UUID id, @RequestBody Despachante despachanteDetails) {
        Optional<Despachante> despachante = despachanteService.buscarPorID(id);
        if (despachante.isPresent()) {
            Despachante updatedDespachante = despachante.get();
            updatedDespachante.setNome(despachanteDetails.getNome());
            updatedDespachante.setMatricula(despachanteDetails.getMatricula());
            updatedDespachante.setEmail(despachanteDetails.getEmail());
            updatedDespachante.setSenha(despachanteDetails.getSenha());
            return ResponseEntity.ok(despachanteService.criar(updatedDespachante));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable UUID id){
        this.despachanteService.deletarPorId(id);
    }
}
