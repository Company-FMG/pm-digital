package com.fmgcompany.mike.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.time.LocalDateTime;

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

    public Ocorrencia iniciarOcorrencia(Ocorrencia ocorrencia) {
        ocorrencia.setInicio(LocalDateTime.now());
        return ocorrenciaRepository.save(ocorrencia);
    }

    public Ocorrencia finalizarOcorrencia(String idOcorrencia) {
        Optional<Ocorrencia> ocorrenciaOptional = ocorrenciaRepository.findById(idOcorrencia);
        if(ocorrenciaOptional.isPresent()) {
            Ocorrencia ocorrencia = ocorrenciaOptional.get();
            ocorrencia.setFim(LocalDateTime.now());
            ocorrenciaRepository.save(ocorrencia);
        } else {
            throw new Exception("Ocorrência não encontrada");
        }
    }
}
