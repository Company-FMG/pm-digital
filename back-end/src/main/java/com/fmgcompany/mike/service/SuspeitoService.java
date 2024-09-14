package com.fmgcompany.mike.service;

import com.fmgcompany.mike.model.Suspeito;
import com.fmgcompany.mike.repository.SuspeitoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SuspeitoService {
    @Autowired
    private SuspeitoRepository vitimaRepository;

    public List<Suspeito> findAll(){
        return this.vitimaRepository.findAll();
    }

    public Optional<Suspeito> findById(String id) {
        return vitimaRepository.findById(id);
    }

    public Suspeito save(Suspeito vitima){
        return vitimaRepository.save(vitima);
    }

    public void deleteById(String id){
        this.vitimaRepository.deleteById(id);
    }
}
