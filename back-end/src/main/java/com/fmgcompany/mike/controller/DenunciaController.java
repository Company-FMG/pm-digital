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

//    @GetMapping("/viatura/{placa}")
//    public ResponseEntity buscaDenunciaPelaViatura(@PathVariable String placa){
//        Optional<DenunciaDTO> denunciaDTO = this.denunciaService.denunciaViatura(placa);
//        denunciaService.listaDenuncias();
//
//        if (denuncia != null) {
//            return ResponseEntity.ok(denuncia);
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND)
//                    .body("Denúncia não encontrada para a viatura com placa: " + placa);
//        }
//    }

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

    @PutMapping("/{idDenuncia}/{idViatura}")
    public ResponseEntity<DenunciaDTO> atribuiViatura(@PathVariable UUID idDenuncia, @PathVariable UUID idViatura) {
        Optional<DenunciaDTO> denunciaDTOOptional = denunciaService.buscaDenunciaPeloId(idDenuncia);

        if (denunciaDTOOptional.isPresent()) {
            DenunciaDTO denunciaDTO = denunciaDTOOptional.get();
            Denuncia denuncia = denunciaMapper.toEntity(denunciaDTO);

            Optional<Viatura> viaturaOptional = viaturaService.buscarPorId(idViatura); // Busca uma viatura específica pelo ID
            if (viaturaOptional.isPresent() && viaturaService.isDisponivel(viaturaOptional.get().getId())) { // Verifica se a viatura está disponível
                Viatura viatura = viaturaOptional.get();

                viatura.setDenuncia(denuncia);

                denuncia.setViatura(viatura);
                denuncia.setStatus(Status.valueOf("EM_ANDAMENTO"));

                denunciaService.atualizar(denuncia);
                viaturaService.atualizar(viatura);

                DenunciaDTO updatedDenunciaDTO = denunciaMapper.toDTO(denuncia); // Atualiza o DTO com a viatura associada

                return ResponseEntity.ok(updatedDenunciaDTO);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PutMapping("/{id}/relatorio")
    public ResponseEntity<Denuncia> adicionaRelatorio(@PathVariable UUID id, @RequestBody String relatorio) {
        // Busca a denúncia pelo ID
        Optional<DenunciaDTO> denunciaDTOOptional = this.denunciaService.buscaDenunciaPeloId(id);

        if (denunciaDTOOptional.isPresent()) {
            DenunciaDTO denunciaDTO = denunciaDTOOptional.get();

            // Busca a viatura associada
            UUID idViatura = denunciaDTO.getIdViatura();
            Optional<Viatura> viaturaOptional = viaturaService.buscarPorId(idViatura);

            if (viaturaOptional.isPresent()) {
                Viatura viatura = viaturaOptional.get();

                // Verifica disponibilidade da viatura
                if (!viaturaService.isDisponivel(viatura.getId())) {
                    return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
                }

                // Atualiza os campos da denúncia
                viatura.setDenuncia(null); // Libera a viatura
                denunciaDTO.setIdViatura(null);
                denunciaDTO.setStatus(Status.FINALIZADA);
                denunciaDTO.setRelatorioFinal(relatorio);

                // Salva as atualizações no banco
                denunciaService.atualizarDTO(id, denunciaDTO);
                viaturaService.atualizar(viatura);

                return ResponseEntity.ok(denunciaMapper.toEntity(denunciaDTO));
            } else {
                // Viatura não encontrada
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(null);
            }
        } else {
            // Denúncia não encontrada
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(null);
        }
    }

    @DeleteMapping("/{id}")
    public void removeDenuncia(@PathVariable UUID id) {
        this.denunciaService.removeDenuncia(id);
    }


}
