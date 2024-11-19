package com.fmgcompany.mike.service;

import com.fmgcompany.mike.dto.DenunciaDTO;
import com.fmgcompany.mike.mapper.DenunciaMapper;
import com.fmgcompany.mike.model.*;
import com.fmgcompany.mike.repository.*;
import jakarta.persistence.EntityNotFoundException;
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

//    public Optional<DenunciaDTO> buscaDenunciaPelaViatura(UUID idViatura){
//        return this.denunciaRepository.findAll().stream().map(denunciaMapper::toDTO).collect(Collectors.toList()).
//    }

    public List<DenunciaDTO> filtroStatus(Status status){
        return this.denunciaRepository.findByStatus(status)
                .stream()
                .map(denunciaMapper::toDTO)
                .collect(Collectors.toList());
    }

    //set
    public DenunciaDTO criaDenuncia(DenunciaDTO denunciaDTO, String matricula){
        Denuncia denuncia = denunciaMapper.toEntity(denunciaDTO);

        Despachante despachante = despachanteRepository.findByMatricula(matricula).orElseThrow(() -> new RuntimeException("Despachante não encontrado"));
        denuncia.setDespachante(despachante);
        
        Denuncia savedDenuncia = this.denunciaRepository.save(denuncia);

        return denunciaMapper.toDTO(savedDenuncia);
    }

    public Denuncia atualizar(Denuncia denuncia) {
        return denunciaRepository.save(denuncia);
    }

    public DenunciaDTO atualizarDTO(UUID id, DenunciaDTO denunciaDTO) {
        return this.denunciaRepository.findById(id)
                .map(denunciaExistente -> {
                    // Atualizar campos simples da denúncia
                    denunciaExistente.setTipo(denunciaDTO.getTipo());
                    denunciaExistente.setRelato(denunciaDTO.getRelato());
                    denunciaExistente.setReferencia(denunciaDTO.getReferencia());
                    denunciaExistente.setStatus(denunciaDTO.getStatus());

                    // Atualizar a vítima, se o ID estiver presente
                    if (denunciaDTO.getIdVitima() != null) {
                        Vitima vitima = vitimaRepository.findById(denunciaDTO.getIdVitima())
                                .orElseThrow(() -> new RuntimeException("Vítima não encontrada"));
                        denunciaExistente.setVitima(vitima);
                    }

                    // Atualizar o suspeito, se o ID estiver presente
                    if (denunciaDTO.getIdSuspeito() != null) {
                        Suspeito suspeito = suspeitoRepository.findById(denunciaDTO.getIdSuspeito())
                                .orElseThrow(() -> new RuntimeException("Suspeito não encontrado"));
                        denunciaExistente.setSuspeito(suspeito);
                    }

                    // Atualizar a geolocalização, se o ID estiver presente
                    if (denunciaDTO.getIdGeolocation() != null) {
                        Geolocation geolocation = geolocationRepository.findById(denunciaDTO.getIdGeolocation())
                                .orElseThrow(() -> new RuntimeException("Geolocalização não encontrada"));
                        denunciaExistente.setGeolocation(geolocation);
                    }

                    // Salva a denúncia atualizada no banco de dados
                    Denuncia denunciaAtualizada = this.denunciaRepository.save(denunciaExistente);

                    // Retorna o DTO atualizado
                    return denunciaMapper.toDTO(denunciaAtualizada);
                })
                .orElseThrow(() -> new RuntimeException("Denúncia não encontrada"));
    }


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

