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

import com.fmgcompany.mike.model.Ocorrencia;
import com.fmgcompany.mike.service.OcorrenciaService;

@RestController
@RequestMapping("/api/ocorrencias")
public class OcorrenciaController {

    @Autowired
    private OcorrenciaService ocorrenciaService;
    
    @GetMapping
    public List<Ocorrencia> pegarOcorrencias() {
        return ocorrenciaService.buscarOcorrencias();
    }

    @GetMapping("/{idOcorrencia}")
    public ResponseEntity<Ocorrencia> pegarOcorrenciaPorId(@PathVariable String id) {
        Optional<Ocorrencia> ocorrencia = ocorrenciaService.buscarOcorrenciaPorId(id);
        return ocorrencia.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Ocorrencia criarOcorrenciaService(@RequestBody Ocorrencia ocorrencia) {
        return ocorrenciaService.criarOcorrencia(ocorrencia);
    }

    @PutMapping("/{idOcorrencia}")
    public ResponseEntity<Ocorrencia> atualizarOcorrencia(@PathVariable String id, @RequestBody Ocorrencia ocorrenciaDetails) {
        Optional<Ocorrencia> ocorrencia = ocorrenciaService.buscarOcorrenciaPorId(id);
        if (ocorrencia.isPresent()) {
            Ocorrencia updatedOcorencia = ocorrencia.get();
            updatedOcorencia.setResponsavelBo(ocorrenciaDetails.getResponsavelBo());
            updatedOcorencia.setRelatorio(ocorrenciaDetails.getRelatorio());
            return ResponseEntity.ok(ocorrenciaService.criarOcorrencia(updatedOcorencia));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{idOcorrencia}")
    public ResponseEntity<Void> deletarOcorrencia(@PathVariable String id) {
        ocorrenciaService.deletarOcorrenciaPorId(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/iniciar-ocorrencia")
    public ResponseEntity<Ocorrencia> iniciarOcorrencia(@RequestBody Ocorrencia ocorrencia) {
        Ocorrencia ocorrencia1 = ocorrenciaService.iniciarOcorrencia(ocorrencia);
        return ResponseEntity.ok(ocorrencia1);
    }

    @PutMapping("/finalizar/{idOcorrencia}")
    public ResponseEntity<Ocorrencia> finalizarOcorrencia(@PathVariable String idOcorrencia) {
        try {
            Ocorrencia ocorrencia = ocorrenciaService.finalizarOcorrencia(idOcorrencia);
            return ResponseEntity.ok(ocorrencia);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
