package com.fmgcompany.mike.controller;

import com.fmgcompany.mike.config.TokenService;
import com.fmgcompany.mike.dto.DenunciaDTO;
import com.fmgcompany.mike.mapper.DenunciaMapper;
import com.fmgcompany.mike.model.*;
import com.fmgcompany.mike.repository.DespachanteRepository;
import com.fmgcompany.mike.service.DenunciaService;
import com.fmgcompany.mike.service.SuspeitoService;
import com.fmgcompany.mike.service.VitimaService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/denuncias")
public class DenunciaController {
    @Autowired
    private DenunciaService denunciaService;
    @Autowired
    private VitimaService vitimaService;
    @Autowired
    private SuspeitoService suspeitoService;
    @Autowired
    private DenunciaMapper denunciaMapper;
    @Autowired
    private DespachanteRepository despachanteRepository;
    @Autowired
    private TokenService tokenService;

    @GetMapping
    public List<DenunciaDTO> listaDenuncias() {
        return denunciaService.listaDenuncias();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DenunciaDTO> buscaDenunciaPeloId(@PathVariable UUID id) {
        Optional<DenunciaDTO> denunciaDTO = this.denunciaService.buscaDenunciaPeloId(id);
        return denunciaDTO.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/filter")
    public List<DenunciaDTO> filtroStatus(@RequestParam Status status) {
        return this.denunciaService.filtroStatus(status);
    }

    @PostMapping
    public ResponseEntity<DenunciaDTO> criaDenuncia(@RequestBody DenunciaDTO denunciaDTO, @RequestHeader("Authorization") String token) {
        String matricula = tokenService.validateToken(token.substring(7));
        System.out.println(matricula);

        DenunciaDTO createdDenuncia = denunciaService.criaDenuncia(denunciaDTO, matricula);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDenuncia);
    }

//    @PutMapping("/{id}")
//    public Object atualizaDenuncia(@PathVariable UUID id, @RequestBody Denuncia denunciaAtualizada) {
//        return this.denunciaService.atualizaDenuncia(id, denunciaAtualizada);
//    }

//    @PutMapping("/{id}/{idVitima}")
//    public ResponseEntity<Vitima> atribuirVitima(@PathVariable UUID id, @PathVariable UUID idVitima){
//        Optional<Vitima> vitima = this.vitimaService.findById(idVitima);
//        Optional<Denuncia> denuncia = this.denunciaService.buscaDenunciaPeloId(id);
//        if(vitima.isPresent()){
//            if(denuncia.isPresent()){
//                Vitima v = vitima.get();
//                Denuncia d = denuncia.get();
//                v.setDenuncia(d);
//                d.setVitima(v);
//                this.denunciaService.criaDenuncia(d);
//                return ResponseEntity.ok(this.vitimaService.save(v));
//            }else{
//                return ResponseEntity.notFound().build();
//
//            }
//        }else {
//            return ResponseEntity.notFound().build();
//        }
//
//    }
//
//    @PutMapping("/{id}/{idSuspeito}")
//    public ResponseEntity<Suspeito> atribuirSuspeito(@PathVariable UUID id, @PathVariable UUID idSuspeito){
//        Optional<Suspeito> suspeito = this.suspeitoService.findById(idSuspeito);
//        Optional<Denuncia> denuncia = this.denunciaService.buscaDenunciaPeloId(id);
//        if(suspeito.isPresent()){
//            if(denuncia.isPresent()){
//                Denuncia d = denuncia.get();
//                Suspeito s = suspeito.get();
//                d.setSuspeito(s);
//                s.setDenuncia(d);
//                this.denunciaService.criaDenuncia(d);
//                return ResponseEntity.ok(this.suspeitoService.save(s));
//            }else{
//                return ResponseEntity.notFound().build();
//            }
//        }else {
//            return ResponseEntity.notFound().build();
//        }
//    }


    @DeleteMapping("/{id}")
    public void removeDenuncia(@PathVariable UUID id) {
        this.denunciaService.removeDenuncia(id);
    }


}
