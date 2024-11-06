package com.fmgcompany.mike.controller;

import com.fmgcompany.mike.config.TokenService;
import com.fmgcompany.mike.dto.DenunciaDTO;
import com.fmgcompany.mike.mapper.DenunciaMapper;
import com.fmgcompany.mike.model.*;
import com.fmgcompany.mike.repository.DespachanteRepository;
import com.fmgcompany.mike.service.DenunciaService;
import com.fmgcompany.mike.service.SuspeitoService;
import com.fmgcompany.mike.service.VitimaService;
import com.fmgcompany.mike.service.ViaturaService;
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
    @Autowired
    private ViaturaService viaturaService;

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

        Optional<Viatura> viaturaOptional = viaturaService.buscarViaturaDisponivel(); 
        if (viaturaOptional.isPresent()) {
            Viatura viatura = viaturaOptional.get();
            Denuncia denuncia = denunciaMapper.toEntity(createdDenuncia);
            viatura.setDenuncia(denuncia); // Associa a denúncia à viatura
            viaturaService.criarViatura(viatura); // Atualiza a viatura com a nova associação
        } else {
            System.out.println("Nenhuma viatura disponível no momento.");
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(createdDenuncia);
    }



    @DeleteMapping("/{id}")
    public void removeDenuncia(@PathVariable UUID id) {
        this.denunciaService.removeDenuncia(id);
    }


}
