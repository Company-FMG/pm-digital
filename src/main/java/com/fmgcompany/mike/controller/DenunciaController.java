package com.fmgcompany.mike.controller;

import com.fmgcompany.mike.model.Denuncia;
import com.fmgcompany.mike.service.DenunciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "https://mikebackend-05gc09wt.b4a.run")
@RestController
@RequestMapping("/api/denuncias")
public class DenunciaController {
    @Autowired
    private DenunciaService denunciaService;

    @GetMapping
    public List<Denuncia> listaDenuncias() {
        return denunciaService.listaDenuncias();
    }

    @GetMapping("/{id}")
    public Optional<Denuncia> buscaDenunciaPeloId(@PathVariable Long id) {
        return this.denunciaService.bucaDenunciaPeloId(id);
    }

    @PostMapping
    public Object criaDenuncia(@RequestBody Denuncia denuncia) {
        return denunciaService.criaDenuncia(denuncia);
    }

    @PutMapping("/{id}")
    public Object atualizaDenuncia(@PathVariable Long id, @RequestBody Denuncia denunciaAtualizada) {
        return this.denunciaService.atualizaDenuncia(id, denunciaAtualizada);
    }


    @DeleteMapping("/{id}")
    public void removeDenuncia(@PathVariable Long id) {
        this.denunciaService.removeDenuncia(id);
    }


}
