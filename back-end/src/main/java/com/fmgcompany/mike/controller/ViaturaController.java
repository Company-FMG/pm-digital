package com.fmgcompany.mike.controller;

import com.fmgcompany.mike.dto.DenunciaDTO;
import com.fmgcompany.mike.model.Denuncia;
import com.fmgcompany.mike.model.Policial;
import com.fmgcompany.mike.model.Viatura;
import com.fmgcompany.mike.service.PolicialService;
import com.fmgcompany.mike.service.ViaturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/viaturas")
public class ViaturaController {
    @Autowired
    private ViaturaService viaturaService;

    @Autowired
    private PolicialService policialService;

    @GetMapping
    public List<Viatura> buscarTodasViaturas(){
        return this.viaturaService.listarTodas();
    }

    @GetMapping("/{id}")
    public Optional<Viatura> buscarViatura(@PathVariable UUID id){
        return this.viaturaService.buscarPorId(id);
    }

    @GetMapping("/{placa}/denuncia")
    public ResponseEntity buscarDenunciaViatura(@PathVariable String placa){
        try {
            Denuncia denuncia = this.viaturaService.denunciaViatura(placa);

            if (denuncia != null) {
                return ResponseEntity.ok(denuncia);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Denúncia não encontrada para a viatura com placa: " + placa);
            }
        } catch (Exception e) {
            // Log de erro, se necessário
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao buscar denúncia para a viatura.");
        }
    }

    @PostMapping
    public Viatura criarViatura(@RequestBody Viatura viatura){
        return this.viaturaService.criarViatura(viatura);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Viatura> update(@PathVariable UUID id, @RequestBody Viatura viaturaDetails){
        Optional<Viatura> viatura = this.viaturaService.buscarPorId(id);
        if(viatura.isPresent()){
            Viatura updatedViatura = viatura.get();
            updatedViatura.setPoliciais(viaturaDetails.getPoliciais());
            updatedViatura.setPlaca(viaturaDetails.getPlaca());
            updatedViatura.setDenuncia(viaturaDetails.getDenuncia());
            return ResponseEntity.ok(this.viaturaService.criarViatura(updatedViatura));
        } else{
            return ResponseEntity.notFound().build();
        }
    }

    //desnecessario
    @PutMapping("/{id}/{idPolicial}")
    public ResponseEntity<Viatura> addPolicial(@PathVariable UUID id, @PathVariable UUID idPolicial){
        Optional<Policial> p = this.policialService.buscarPorId(idPolicial);
        Optional<Viatura> v = this.viaturaService.buscarPorId(id);
        if(v.isPresent()){
            if(p.isPresent()){
                Viatura viatura = v.get();
                Policial policial = p.get();
                List<Policial> pLista = new ArrayList<>();
                pLista.add(policial);
                viatura.setPoliciais(pLista);
                policial.setViatura(viatura);
                policialService.criar(policial);
                return ResponseEntity.ok(this.viaturaService.criarViatura(viatura));
            } else{
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //desnecessario
    @DeleteMapping("/{id}/{idPolicial}")
    public ResponseEntity<Viatura> removerPolicial(@PathVariable UUID id, @PathVariable UUID idPolicial){
        Optional<Policial> p = this.policialService.buscarPorId(idPolicial);
        Optional<Viatura> v = this.viaturaService.buscarPorId(id);
        if(v.isPresent()){
            if(p.isPresent()){
                Viatura viatura = v.get();
                Policial policial = p.get();
                List<Policial> pLista = viatura.getPoliciais();
                pLista.remove(policial);
                viatura.setPoliciais(pLista);
                return ResponseEntity.ok(this.viaturaService.criarViatura(viatura));
            } else{
                return ResponseEntity.notFound().build();

            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletarViatura(@PathVariable UUID id){
        Optional<Viatura> v = this.viaturaService.buscarPorId(id);
        if(v.isPresent()){
            this.viaturaService.deletarPorId(id);
            return new ResponseEntity<>("Viatura deletada com sucesso", HttpStatus.OK);
        } else{
            return new ResponseEntity<>("ID não existe",HttpStatus.BAD_REQUEST);
        }
    }
}
