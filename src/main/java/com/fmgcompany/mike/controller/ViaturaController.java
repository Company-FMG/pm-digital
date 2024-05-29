package com.fmgcompany.mike.controller;

import com.fmgcompany.mike.model.Policial;
import com.fmgcompany.mike.model.Viatura;
import com.fmgcompany.mike.service.PolicialService;
import com.fmgcompany.mike.service.ViaturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/viaturas")
public class ViaturaController {
    @Autowired
    private ViaturaService viaturaService;
    @Autowired
    private PolicialService policialService;

    @GetMapping
    public List<Viatura> buscarTodasViaturas(){
        return this.viaturaService.buscarViaturas();
    }
    @GetMapping("/{id}")
    public Optional<Viatura> buscarViatura(@PathVariable UUID id){
        return this.viaturaService.buscarViaturaId(id);
    }

    @PostMapping
    public Viatura criarViatura(@RequestBody Viatura viatura){
        return this.viaturaService.criarViatura(viatura);
    }

    //Alterar a viatura
    @PutMapping
    public ResponseEntity<Viatura> alterarViatura(@PathVariable UUID id, @RequestBody Viatura alteracoes){
        Optional<Viatura> viatura = this.viaturaService.buscarViaturaId(id);
        if(viatura.isPresent()){
            Viatura viaturaAtualizada = viatura.get();
            viaturaAtualizada.setPoliciais(alteracoes.getPoliciais());
            viaturaAtualizada.setMarca(alteracoes.getMarca());
            viaturaAtualizada.setPlaca(alteracoes.getPlaca());
            viaturaAtualizada.setModelo(alteracoes.getModelo());
            return ResponseEntity.ok(this.viaturaService.criarViatura(viaturaAtualizada));
        }else{
            return ResponseEntity.notFound().build();
        }
    }
    //Adicionar um policial a viatura
    @PutMapping("/{id}/{idPolicial}")
    public ResponseEntity<Viatura> addPolicial(@PathVariable UUID id, @PathVariable String idPolicial){
        Optional<Policial> p = this.policialService.findById(idPolicial);
        Optional<Viatura> v = this.viaturaService.buscarViaturaId(id);
        if(v.isPresent()){
            if(p.isPresent()){
                Viatura viatura = v.get();
                Policial policial = p.get();
                List<Policial> pLista = new ArrayList<>();
                pLista.add(policial);
                viatura.setPoliciais(pLista);
                return ResponseEntity.ok(this.viaturaService.criarViatura(viatura));
            }else{
                return ResponseEntity.notFound().build();

            }
        }else {
            return ResponseEntity.notFound().build();
        }

    }
    //Remover um policial da viatura
    @DeleteMapping("/{id}/{idPolicial}")
    public ResponseEntity<Viatura> removerPolicial(@PathVariable UUID id, @PathVariable String idPolicial){
        Optional<Policial> p = this.policialService.findById(idPolicial);
        Optional<Viatura> v = this.viaturaService.buscarViaturaId(id);
        if(v.isPresent()){
            if(p.isPresent()){
                Viatura viatura = v.get();
                Policial policial = p.get();
                List<Policial> pLista = viatura.getPoliciais();
                pLista.remove(policial);
                viatura.setPoliciais(pLista);
                return ResponseEntity.ok(this.viaturaService.criarViatura(viatura));
            }else{
                return ResponseEntity.notFound().build();

            }
        }else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletarViatura(@PathVariable UUID id){
        //this.viaturaService.deletarViaturaId(id);
        Optional<Viatura> v = this.viaturaService.buscarViaturaId(id);
        if(v.isPresent()){
            this.viaturaService.deletarViaturaId(id);
            return new ResponseEntity<>("Viatura deletada com sucesso",HttpStatus.OK);
        }else{
            return new ResponseEntity<>("ID não existe",HttpStatus.BAD_REQUEST);
        }
    }


}
