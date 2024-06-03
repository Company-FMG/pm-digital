package com.fmgcompany.mike.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.time.LocalTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fmgcompany.mike.repository.OcorrenciaRepository;
import com.fmgcompany.mike.exception.OcorrenciaNotFoundException;
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
        ocorrencia.setInicio(LocalTime.now());
        return ocorrenciaRepository.save(ocorrencia);
    }

    public Ocorrencia finalizarOcorrencia(String idOcorrencia) {
        Optional<Ocorrencia> ocorrenciaOptional = ocorrenciaRepository.findById(idOcorrencia);
        if(ocorrenciaOptional.isPresent()) {
            Ocorrencia ocorrencia = ocorrenciaOptional.get();
            ocorrencia.setFim(LocalTime.now());
            return ocorrenciaRepository.save(ocorrencia);
        } else {
            throw new OcorrenciaNotFoundException("Ocorrência não encontrada com o ID: " + idOcorrencia);
        }
    }

    public void getStatus(Ocorrencia ocorrencia) {
        if (ocorrencia.getInicio() == null) {
            System.out.println("Ocorrência não iniciada");
        } else if (ocorrencia.getFim() == null) {
            System.out.println("Ocorrência em andamento");
        } else {
            System.out.println("Ocorrência finalizada");
        }
    }

}