package com.fmgcompany.mike.service;

import com.fmgcompany.mike.model.Despachante;
import com.fmgcompany.mike.repository.DespachanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class DespachanteService {
    @Autowired
    private DespachanteRepository despachanteRepository;

    //get all
    public List<Despachante> listarTodos () {
        return this.despachanteRepository.findAll();
    }

    //get by ID
    public Optional<Despachante> buscarPorID (UUID id) {
        return this.despachanteRepository.findById(id);
    }

    //post
    public Despachante criar(Despachante despachante) {
        return this.despachanteRepository.save(despachante);
    }

    //delete
    public void deletarPorId(UUID id){
        this.despachanteRepository.deleteById(id);
    }
}
