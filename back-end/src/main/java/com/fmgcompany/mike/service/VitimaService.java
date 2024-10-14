package com.fmgcompany.mike.service;

import com.fmgcompany.mike.model.Vitima;
import com.fmgcompany.mike.repository.VitimaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class VitimaService {
    @Autowired
    private VitimaRepository vitimaRepository;

    public List<Vitima> findAll(){
        return this.vitimaRepository.findAll();
    }

    public List<String> findByEmail(){
        return vitimaRepository.findByEmail();
    }

    public Vitima findByNome(String nome){
        return this.vitimaRepository.findByNome(nome);
    }

    public Optional<Vitima> findById(UUID id) {
        return vitimaRepository.findById(id);
    }

    public Vitima save(Vitima vitima){
        return vitimaRepository.save(vitima);
    }

    public void deleteById(UUID id){
        this.vitimaRepository.deleteById(id);
    }
}
