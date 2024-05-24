package com.fmgcompany.mike.controller;

import com.fmgcompany.mike.model.Viatura;
import com.fmgcompany.mike.service.ViaturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/viaturas")
public class ViaturaController {
    @Autowired
    private ViaturaService viaturaService;

    @GetMapping
    public List<Viatura> buscarTodasViaturas(){
        return this.viaturaService.buscarViaturas();
    }
    @GetMapping("/{idViatura}")
    public Optional<Viatura> buscarViatura(@PathVariable String id){
        return this.viaturaService.buscarViaturaId(id);
    }

    @PostMapping
    public Viatura criarViatura(@RequestBody Viatura viatura){
        return this.viaturaService.criarViatura(viatura);
    }

    @PutMapping
    public ResponseEntity<Viatura> alterarViatura(@PathVariable String id, @RequestBody Viatura alteracoes){
        Optional<Viatura> viatura = this.viaturaService.buscarViaturaId(id);
        if(viatura.isPresent()){
            Viatura viaturaAtualizada = viatura.get();
            viaturaAtualizada.setPoliciais(alteracoes.getPoliciais());
            return ResponseEntity.ok(this.viaturaService.criarViatura(viaturaAtualizada));
        }else{
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{idViatura}")
    public void deletarViatura(@PathVariable String id){
        this.viaturaService.deletarViaturaId(id);
    }
}
