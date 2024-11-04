package com.fmgcompany.mike.service;

import com.fmgcompany.mike.model.Despachante;
import com.fmgcompany.mike.repository.DespachanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class DespachanteDetailsService implements UserDetailsService {
    @Autowired
    private DespachanteRepository despachanteRepository;
    @Override
    public UserDetails loadUserByUsername(String matricula) throws UsernameNotFoundException {
        Despachante despachante = this.despachanteRepository.findByMatricula(matricula).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return new org.springframework.security.core.userdetails.User(despachante.getMatricula(), despachante.getSenha(), new ArrayList<>());
    }
}
