package com.fmgcompany.mike.config;

import com.fmgcompany.mike.model.Despachante;
import com.fmgcompany.mike.repository.DespachanteRepository;
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

@Component
public class SecurityFilter extends OncePerRequestFilter {
    @Autowired
    TokenService tokenService;
    @Autowired
    DespachanteRepository despachanteRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String path = request.getServletPath();
        if ("/despachantes/login".equals(path) || "/despachantes/register".equals(path) || "/policiais/login".equals(path) || "/policiais/register".equals(path)) {
            filterChain.doFilter(request, response);
            return;
        }

        var token = this.recoverToken(request);
        var matricula = tokenService.validateToken(token);
        System.out.println(matricula);

        if(matricula != null){
            Despachante despachante = despachanteRepository.findByMatricula(matricula).orElseThrow(() -> new RuntimeException("Despachante não encontrado"));
            var authentication = new UsernamePasswordAuthenticationToken(despachante, null, null);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        filterChain.doFilter(request, response);
    }

    private String recoverToken(HttpServletRequest request){
        var authHeader = request.getHeader("Authorization");
        if(authHeader == null) return null;
        return authHeader.replace("Bearer ", "");
    }
}
