package com.fmgcompany.mike.service;


import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.fmgcompany.mike.model.Policial;
import com.fmgcompany.mike.repository.PolicialRepository;

@Service
public class PolicialService {
    @Autowired
    private PolicialRepository policialRepository;

    public List<Policial> listarTodos() {
        return this.policialRepository.findAll();
    }

    public Optional<Policial> buscarPorId(UUID id) {
        return this.policialRepository.findById(id);
    }

    public Optional<Policial> buscarPorMatricula(String matricula){
        return this.policialRepository.findByMatricula(matricula);
    }

    public Policial criar(Policial policial) {
        return this.policialRepository.save(policial);
    }

    public Policial atualizar(Policial policial) {
        return this.policialRepository.save(policial);
    }

    public void deletarPorId(UUID id) {
        this.policialRepository.deleteById(id);
    }
}
