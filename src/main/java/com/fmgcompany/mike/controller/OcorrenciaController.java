package com.fmgcompany.mike.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.fmgcompany.mike.model.Policial;
import com.fmgcompany.mike.service.PolicialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fmgcompany.mike.model.Ocorrencia;
import com.fmgcompany.mike.service.OcorrenciaService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
@RequestMapping("/api/ocorrencias")
public class OcorrenciaController {

    @Autowired
    private OcorrenciaService ocorrenciaService;
    @Autowired
    private PolicialService policialService;
    
    @GetMapping
    public List<Ocorrencia> pegarOcorrencias() {
        return ocorrenciaService.buscarOcorrencias();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ocorrencia> pegarOcorrenciaPorId(@PathVariable String id) {
        Optional<Ocorrencia> ocorrencia = ocorrenciaService.buscarOcorrenciaPorId(id);
        return ocorrencia.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Ocorrencia criarOcorrenciaService(@RequestBody Ocorrencia ocorrencia) {
        return ocorrenciaService.criarOcorrencia(ocorrencia);
    }

    //Alterar Ocorrência
    @PutMapping("/{id}")
    public ResponseEntity<Ocorrencia> atualizarOcorrencia(@PathVariable String id,@RequestBody Ocorrencia ocorrenciaDetails) {
        Optional<Ocorrencia> ocorrencia = ocorrenciaService.buscarOcorrenciaPorId(id);
        if (ocorrencia.isPresent()) {
            Ocorrencia updatedOcorrencia = ocorrencia.get();
            updatedOcorrencia.setResponsavelBo(ocorrenciaDetails.getResponsavelBo());
            updatedOcorrencia.setRelatorio(ocorrenciaDetails.getRelatorio());
            return ResponseEntity.ok(ocorrenciaService.criarOcorrencia(updatedOcorrencia));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping("/{id}/{idPolicial}")
    public ResponseEntity<Ocorrencia> adicionarResponsavelBO(@PathVariable String id, @PathVariable UUID idPolicial){
        Optional<Ocorrencia> o = ocorrenciaService.buscarOcorrenciaPorId(id);
        Optional<Policial> p = policialService.findById(idPolicial);
        if(o.isPresent()){
            if(p.isPresent()){
                Policial policial = p.get();
                Ocorrencia ocorrencia = o.get();
                ocorrencia.setResponsavelBo(policial);
                return ResponseEntity.ok(ocorrenciaService.criarOcorrencia(ocorrencia));
            }else{
                return ResponseEntity.notFound().build();
            }
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarOcorrencia(@PathVariable String id) {
        ocorrenciaService.deletarOcorrenciaPorId(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/iniciar-ocorrencia")
    public ResponseEntity<Ocorrencia> iniciarOcorrencia(@RequestBody Ocorrencia ocorrencia) {
        Ocorrencia ocorrencia1 = ocorrenciaService.iniciarOcorrencia(ocorrencia);
        return ResponseEntity.ok(ocorrencia1);
    }

    @PutMapping("/finalizar/{id}")
    public ResponseEntity<Ocorrencia> finalizarOcorrencia(@PathVariable String id) {
        try {
            Ocorrencia ocorrencia = ocorrenciaService.finalizarOcorrencia(id);
            return ResponseEntity.ok(ocorrencia);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
