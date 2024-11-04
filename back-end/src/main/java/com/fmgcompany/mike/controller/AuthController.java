package com.fmgcompany.mike.controller;

import com.fmgcompany.mike.config.TokenService;
import com.fmgcompany.mike.dto.AuthResponseDTO;
import com.fmgcompany.mike.dto.LoginRequestDTO;
import com.fmgcompany.mike.dto.RegisterRequestDTO;
import com.fmgcompany.mike.model.Despachante;
import com.fmgcompany.mike.repository.DespachanteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final DespachanteRepository despachanteRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private final TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDTO loginRequestDTO){
        Despachante despachante = this.despachanteRepository.findByMatricula(loginRequestDTO.getMatricula()).orElseThrow(() -> new RuntimeException("Despachante não encontrado"));
        if(passwordEncoder.matches(loginRequestDTO.getSenha(), despachante.getSenha())) {
            String token = this.tokenService.generateToken(despachante);
            return ResponseEntity.ok(new AuthResponseDTO(despachante.getNome(), token));
        }
        return ResponseEntity.badRequest().build();
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

            String token = this.tokenService.generateToken(newUser);
            return ResponseEntity.ok(new AuthResponseDTO(newUser.getNome(), token));
        }
        return ResponseEntity.badRequest().build();
    }
}
