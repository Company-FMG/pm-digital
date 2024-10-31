package com.fmgcompany.mike.service;

import com.fmgcompany.mike.dto.DenunciaDTO;
import com.fmgcompany.mike.mapper.DenunciaMapper;
import com.fmgcompany.mike.model.*;
import com.fmgcompany.mike.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class DenunciaService {
    @Autowired
    private DenunciaRepository denunciaRepository;
    @Autowired
    private VitimaRepository vitimaRepository;
    @Autowired
    private SuspeitoRepository suspeitoRepository;
    @Autowired
    private GeolocationRepository geolocationRepository;
    @Autowired
    private DespachanteRepository despachanteRepository;
    @Autowired
    private DenunciaMapper denunciaMapper;

    //get
    public List<DenunciaDTO> listaDenuncias(){
        return this.denunciaRepository.findAll()
                .stream()
                .map(denunciaMapper::toDTO)
                .collect(Collectors.toList());
    }

    //get
    public Optional<DenunciaDTO> buscaDenunciaPeloId(UUID id){
        return this.denunciaRepository.findById(id)
                .map(denunciaMapper::toDTO);
    }

    public List<DenunciaDTO> filtroStatus(Status status){
        return this.denunciaRepository.findByStatus(status)
                .stream()
                .map(denunciaMapper::toDTO)
                .collect(Collectors.toList());
    }

    //set
    public DenunciaDTO criaDenuncia(DenunciaDTO denunciaDTO){
        Denuncia denuncia = denunciaMapper.toEntity(denunciaDTO);
        Denuncia savedDenuncia = this.denunciaRepository.save(denuncia);
        return denunciaMapper.toDTO(savedDenuncia);
    }

//    //put
//    public DenunciaDTO atualizaDenuncia(UUID id, DenunciaDTO denunciaDTO) {
//        return this.denunciaRepository.findById(id)
//                .map(denunciaExistente -> {
//                    // Atualizar campos simples
//                    denunciaExistente.setTipo(denunciaDTO.getTipo());
//                    denunciaExistente.setRelato(denunciaDTO.getRelato());
//                    denunciaExistente.setReferencia(denunciaDTO.getReferencia());
//                    denunciaExistente.setStatus(denunciaDTO.getStatus());
//
//                    if (denunciaDTO.getIdVitima() != null) {
//                        Vitima vitima = vitimaRepository.findById(denunciaDTO.getIdVitima())
//                                .orElseThrow(() -> new RuntimeException("Vítima não encontrada"));
//                        denunciaExistente.setVitima(vitima);
//                    }
//
//                    if (denunciaDTO.getIdSuspeito() != null) {
//                        Suspeito suspeito = suspeitoRepository.findById(denunciaDTO.getIdSuspeito())
//                                .orElseThrow(() -> new RuntimeException("Suspeito não encontrado"));
//                        denunciaExistente.setSuspeito(suspeito);
//                    }
//
//                    if (denunciaDTO.getIdDespachante() != null) {
//                        Despachante despachante = despachanteRepository.findById(denunciaDTO.getIdDespachante())
//                                .orElseThrow(() -> new RuntimeException("Despachante não encontrado"));
//                        denunciaExistente.setDespachante(despachante);
//                    }
//
//                    if (denunciaDTO.getIdGeolocation() != null) {
//                        Geolocation geolocation = geolocationRepository.findById(denunciaDTO.getIdGeolocation())
//                                .orElseThrow(() -> new RuntimeException("Geolocalização não encontrada"));
//                        denunciaExistente.setGeolocation(geolocation);
//                    }
//
//                    Denuncia denunciaAtualizada = this.denunciaRepository.save(denunciaExistente);
//                    return denunciaMapper.toDTO(denunciaAtualizada);
//                })
//                .orElseThrow(() -> new RuntimeException("Denúncia não encontrada"));
//    }

    //delete
    public void removeDenuncia(UUID id){
        Optional<Denuncia> denuncia = this.denunciaRepository.findById(id);

        if(denuncia.isEmpty()){
            throw new RuntimeException("Denúncia não encontrada");
        } else {
            this.denunciaRepository.deleteById(id);
        }
    }
}

