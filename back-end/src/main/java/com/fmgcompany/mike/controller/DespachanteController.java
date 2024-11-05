package com.fmgcompany.mike.controller;

import com.fmgcompany.mike.config.TokenService;
import com.fmgcompany.mike.dto.AuthResponseDTO;
import com.fmgcompany.mike.dto.LoginRequestDTO;
import com.fmgcompany.mike.dto.RegisterRequestDTO;
import com.fmgcompany.mike.model.Despachante;
import com.fmgcompany.mike.repository.DespachanteRepository;
import com.fmgcompany.mike.service.DespachanteService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/despachantes") //sem /api e no plural
@RequiredArgsConstructor
public class DespachanteController {
    @Autowired
    private DespachanteService despachanteService;

    private final DespachanteRepository despachanteRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private final TokenService tokenService;

    @GetMapping
    public List<Despachante> readAll(){
        return this.despachanteService.listarTodos();
    }

    @GetMapping("/{id}")
    public Optional<Despachante> readById(@PathVariable UUID id){
        return this.despachanteService.buscarPorID(id);
    }

    @PostMapping
    public Despachante create(@RequestBody Despachante despachante){
        return this.despachanteService.criar(despachante);
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegisterRequestDTO registerRequestDTO){
        Optional<Despachante> despachante = this.despachanteRepository.findByMatricula(registerRequestDTO.getMatricula());

        if(despachante.isEmpty()) {
            Despachante newUser = new Despachante();
            newUser.setSenha(passwordEncoder.encode(registerRequestDTO.getSenha()));
            newUser.setEmail(registerRequestDTO.getEmail());
            newUser.setMatricula(registerRequestDTO.getMatricula());
            newUser.setNome(registerRequestDTO.getNome());
            this.despachanteRepository.save(newUser);

            String token = this.tokenService.generateDespachanteToken(newUser);
            return ResponseEntity.ok(new AuthResponseDTO(newUser.getNome(), token));
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDTO loginRequestDTO){
        Despachante despachante = this.despachanteRepository.findByMatricula(loginRequestDTO.getMatricula()).orElseThrow(() -> new RuntimeException("Despachante não encontrado"));
        if(passwordEncoder.matches(loginRequestDTO.getSenha(), despachante.getSenha())) {
            String token = this.tokenService.generateDespachanteToken(despachante);
            return ResponseEntity.ok(new AuthResponseDTO(despachante.getNome(), token));
        }
        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Despachante> update(@PathVariable UUID id, @RequestBody Despachante despachanteDetails) {
        Optional<Despachante> despachante = despachanteService.buscarPorID(id);
        if (despachante.isPresent()) {
            Despachante updatedDespachante = despachante.get();
            updatedDespachante.setNome(despachanteDetails.getNome());
            updatedDespachante.setMatricula(despachanteDetails.getMatricula());
            updatedDespachante.setEmail(despachanteDetails.getEmail());
            updatedDespachante.setSenha(despachanteDetails.getSenha());
            return ResponseEntity.ok(despachanteService.criar(updatedDespachante));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable UUID id){
        this.despachanteService.deletarPorId(id);
    }
}
