package com.fmgcompany.mike.controller;

import com.fmgcompany.mike.model.Denuncia;
import com.fmgcompany.mike.model.Vitima;
import com.fmgcompany.mike.service.DenunciaService;
import com.fmgcompany.mike.service.VitimaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
@RequestMapping("/api/denuncias")
public class DenunciaController {
    @Autowired
    private DenunciaService denunciaService;
    @Autowired
    private VitimaService vitimaService;

    @GetMapping
    public List<Denuncia> listaDenuncias() {
        return denunciaService.listaDenuncias();
    }

    @GetMapping("/{id}")
    public Optional<Denuncia> buscaDenunciaPeloId(@PathVariable Long id) {
        return this.denunciaService.buscaDenunciaPeloId(id);
    }

    @PostMapping
    public Object criaDenuncia(@RequestBody Denuncia denuncia) {
        return denunciaService.criaDenuncia(denuncia);
    }

    @PutMapping("/{id}")
    public Object atualizaDenuncia(@PathVariable Long id, @RequestBody Denuncia denunciaAtualizada) {
        return this.denunciaService.atualizaDenuncia(id, denunciaAtualizada);
    }

    //Adicionar uma vítima a uma denúncia
    @PutMapping("/{id}/{idVitima}")
    public ResponseEntity<Vitima> atribuirVitima(@PathVariable Long id, @PathVariable String idVitima){
        Optional<Vitima> vitima = this.vitimaService.findById(idVitima);
        Optional<Denuncia> denuncia = this.denunciaService.buscaDenunciaPeloId(id);
        if(vitima.isPresent()){
            if(denuncia.isPresent()){
                Vitima v = vitima.get();
                Denuncia d = denuncia.get();
                List<Denuncia> dLista = new ArrayList<>();
                dLista.add(d);
                v.setDenuncias(dLista);
                d.setVitima(v);
                this.denunciaService.criaDenuncia(d);
                return ResponseEntity.ok(this.vitimaService.save(v));
            }else{
                return ResponseEntity.notFound().build();

            }
        }else {
            return ResponseEntity.notFound().build();
        }

    }


    @DeleteMapping("/{id}")
    public void removeDenuncia(@PathVariable Long id) {
        this.denunciaService.removeDenuncia(id);
    }


}
