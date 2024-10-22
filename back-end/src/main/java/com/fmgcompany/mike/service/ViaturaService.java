package com.fmgcompany.mike.service;

import com.fmgcompany.mike.model.Viatura;
import com.fmgcompany.mike.repository.ViaturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ViaturaService {
    @Autowired
    private ViaturaRepository viaturaRepository;

    public List<Viatura> listarTodas(){
        return this.viaturaRepository.findAll();
    }

    public Optional<Viatura> buscarPorId(UUID id){
        return this.viaturaRepository.findById(id);
    }

    public Viatura criarViatura(Viatura viatura){
        return viaturaRepository.save(viatura);
    }

    public void deletarPorId(UUID id){
        this.viaturaRepository.deleteById(id);
    }
}
