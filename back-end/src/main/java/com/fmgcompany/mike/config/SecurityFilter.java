package com.fmgcompany.mike.config;

import com.auth0.jwt.exceptions.JWTDecodeException;
import com.fmgcompany.mike.model.Despachante;
import com.fmgcompany.mike.model.Policial;
import com.fmgcompany.mike.repository.DespachanteRepository;
import com.fmgcompany.mike.repository.PolicialRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;
import java.util.Optional;

@Component
public class SecurityFilter extends OncePerRequestFilter {
    @Autowired
    TokenService tokenService;
    @Autowired
    DespachanteRepository despachanteRepository;
    @Autowired
    PolicialRepository policialRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String path = request.getServletPath();
        if ("/despachantes/login".equals(path) || "/despachantes/register".equals(path) || "/policiais/login".equals(path) || "/policiais/register".equals(path)) {
            filterChain.doFilter(request, response);
            return;
        }

        var token = this.recoverToken(request);
        Optional.ofNullable(token).orElseThrow(() -> new JWTDecodeException("The token is null"));

        var matricula = tokenService.validateToken(token);

        System.out.println("Token recebido: " + token);
        System.out.println("Matrícula decodificada: " + matricula);

        if(matricula != null){
            var optionalDespachante = despachanteRepository.findByMatricula(matricula);
            if (optionalDespachante.isPresent()) {
                Despachante despachante = optionalDespachante.get();

                var authentication = new UsernamePasswordAuthenticationToken(despachante, null, null);
                SecurityContextHolder.getContext().setAuthentication(authentication);
                System.out.println("O usuário é Despachante");
            } else {
                Policial policial = policialRepository.findByMatricula(matricula).orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

                var authentication = new UsernamePasswordAuthenticationToken(policial, null, null);
                SecurityContextHolder.getContext().setAuthentication(authentication);
                System.out.println("O usuário é Policial");
            }
        }
        filterChain.doFilter(request, response);
    }

    private String recoverToken(HttpServletRequest request){
        var authHeader = request.getHeader("Authorization");
        if(authHeader == null || !authHeader.startsWith("Bearer ")) return null;
        return authHeader.replace("Bearer ", "");
    }
}
