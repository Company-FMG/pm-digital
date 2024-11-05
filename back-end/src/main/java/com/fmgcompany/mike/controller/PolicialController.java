package com.fmgcompany.mike.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.fmgcompany.mike.config.TokenService;
import com.fmgcompany.mike.dto.AuthResponseDTO;
import com.fmgcompany.mike.dto.LoginRequestDTO;
import com.fmgcompany.mike.dto.RegisterRequestDTO;
import com.fmgcompany.mike.repository.PolicialRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.fmgcompany.mike.service.PolicialService;
import com.fmgcompany.mike.model.Policial;

@RestController
@RequestMapping("/policiais")
@RequiredArgsConstructor
public class PolicialController {
    @Autowired
    private PolicialService policialService;

    private final PolicialRepository policialRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private final TokenService tokenService;

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

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDTO loginRequestDTO){
        Policial policial = this.policialRepository.findByMatricula(loginRequestDTO.getMatricula()).orElseThrow(() -> new RuntimeException("Policial não encontrado"));
        if(passwordEncoder.matches(loginRequestDTO.getSenha(), policial.getSenha())) {
            String token = this.tokenService.generatePolicialToken(policial);
            return ResponseEntity.ok(new AuthResponseDTO(policial.getNome(), token));
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegisterRequestDTO registerRequestDTO){
        Optional<Policial> policial = this.policialRepository.findByMatricula(registerRequestDTO.getMatricula());

        if(policial.isEmpty()) {
            Policial newUser = new Policial();
            newUser.setSenha(passwordEncoder.encode(registerRequestDTO.getSenha()));
            newUser.setEmail(registerRequestDTO.getEmail());
            newUser.setMatricula(registerRequestDTO.getMatricula());
            newUser.setNome(registerRequestDTO.getNome());
            this.policialRepository.save(newUser);

            String token = this.tokenService.generatePolicialToken(newUser);
            return ResponseEntity.ok(new AuthResponseDTO(newUser.getNome(), token));
        }
        return ResponseEntity.badRequest().build();
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
