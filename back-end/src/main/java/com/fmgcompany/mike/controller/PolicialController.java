package com.fmgcompany.mike.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.fmgcompany.mike.model.Despachante;
import com.fmgcompany.mike.service.DenunciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.fmgcompany.mike.service.PolicialService;
import com.fmgcompany.mike.model.Policial;

@RestController
@RequestMapping("/policiais")
public class PolicialController {
    @Autowired
    private PolicialService policialService;

    @GetMapping
    public List<Policial> readAll() {
        return this.policialService.listarTodos();
    }

    @GetMapping("/{id}")
    public Optional<Policial> readById(@PathVariable UUID id) {
        return this.policialService.buscarPorId(id);
    }

    @PostMapping
    public Policial create(@RequestBody Policial policial) {
        return policialService.criar(policial);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Policial> update(@PathVariable UUID id, @RequestBody Policial policialDetails) {
        Optional<Policial> policial = policialService.buscarPorId(id);
        if (policial.isPresent()) {
            Policial updatedPolicial = policial.get();
            updatedPolicial.setNome(policialDetails.getNome());
            updatedPolicial.setMatricula(policialDetails.getMatricula());
            updatedPolicial.setEmail(policialDetails.getEmail());
            updatedPolicial.setSenha(policialDetails.getSenha());
            return ResponseEntity.ok(policialService.criar(updatedPolicial));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable UUID id) {
        this.policialService.deletarPorId(id);
    }

//    //Remover um ocorrência de policial
//    @DeleteMapping("/{id}/{idOcorrencia}")
//    public ResponseEntity<Policial> removerOcorrencia(@PathVariable UUID id, @PathVariable String idOcorrencia){
//        Optional<Policial> p = this.policialService.findById(id);
//        Optional<Ocorrencia> o = this.denunciaService.buscarOcorrenciaPorId(idOcorrencia);
//        if(p.isPresent()){
//            if(o.isPresent()){
//                Ocorrencia ocorrencia = o.get();
//                Policial policial = p.get();
//                List<Ocorrencia> oLista = policial.getOcorrencias();
//                oLista.remove(ocorrencia);
//                policial.setOcorrencias(oLista);
//                ocorrencia.setResponsavelBo(null);
//                denunciaService.criarOcorrencia(ocorrencia);
//                return ResponseEntity.ok(this.policialService.save(policial));
//            }else{
//                return ResponseEntity.notFound().build();
//
//            }
//        }else {
//            return ResponseEntity.notFound().build();
//        }
//    }
}
