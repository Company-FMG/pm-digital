package com.fmgcompany.mike.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fmgcompany.mike.repository.OcorrenciaRepository;
import com.fmgcompany.mike.model.Ocorrencia;

@Service
public class OcorrenciaService {
    
    @Autowired
    private OcorrenciaRepository ocorrenciaRepository;

    public List<Ocorrencia> buscarOcorrencias() {
        return ocorrenciaRepository.findAll();
    }

    public Optional<Ocorrencia> buscarOcorrenciaPorId(String id) {
        return ocorrenciaRepository.findById(id);
    }

    public Ocorrencia criarOcorrencia(Ocorrencia ocorrencia) {
        return ocorrenciaRepository.save(ocorrencia);
    }

    public void deletarOcorrenciaPorId(String id) {
        ocorrenciaRepository.deleteById(id);
    }

    public boolean existePorId(String id) {
        return ocorrenciaRepository.existsById(id);
    }
}
