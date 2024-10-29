package com.fmgcompany.mike.service;

import com.fmgcompany.mike.dto.DenunciaDTO;
import com.fmgcompany.mike.model.Denuncia;
import com.fmgcompany.mike.model.Status;
import com.fmgcompany.mike.repository.DenunciaRepository;
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

    //get
    public List<DenunciaDTO> listaDenuncias(){
        return this.denunciaRepository.findAll()
                .stream().map(this::convertToDto)
                .collect(Collectors.toList());
    }

    private DenunciaDTO convertToDto(Denuncia denuncia) {
        DenunciaDTO denunciaDTO = new DenunciaDTO();

        denunciaDTO.setIdDenuncia(denuncia.getId());
        denunciaDTO.setTipo(denuncia.getTipo());
        denunciaDTO.setRelato(denuncia.getRelato());
        denunciaDTO.setReferencia(denuncia.getReferencia());

        denunciaDTO.setIdVitima(denuncia.getVitima().getId());
        denunciaDTO.setNomeVitima(denuncia.getVitima().getNome());
        denunciaDTO.setSexoVitima(denuncia.getVitima().getSexo());
        denunciaDTO.setIdadeVitima(denuncia.getVitima().getIdade());

        denunciaDTO.setIdSuspeito(denuncia.getSuspeito().getId());
        denunciaDTO.setNomeSuspeito(denuncia.getSuspeito().getNome());
        denunciaDTO.setSexoSuspeito(denuncia.getSuspeito().getSexo());
        denunciaDTO.setIdadeSuspeito(denuncia.getSuspeito().getIdade());
        denunciaDTO.setDescricaoSuspeito(denuncia.getSuspeito().getDescricao());

        denunciaDTO.setIdGeolocation(denuncia.getGeolocation().getId());
        denunciaDTO.setLocal(denuncia.getGeolocation().getLocal());
        denunciaDTO.setCep(denuncia.getGeolocation().getCep());
        denunciaDTO.setLat(denuncia.getGeolocation().getLat());
        denunciaDTO.setLng(denuncia.getGeolocation().getLng());

        return denunciaDTO;
    }

    //get
    public Optional<Denuncia> buscaDenunciaPeloId(UUID id){
        return  this.denunciaRepository.findById(id);
    }

    public List<Denuncia> filtroStatus(Status status){
        return this.denunciaRepository.findByStatus(status);
    }

    //set
    public Denuncia criaDenuncia(Denuncia denuncia){
        return this.denunciaRepository.save(denuncia);
    }

    //put
//    public Denuncia atualizaDenuncia(UUID id, Denuncia denunciaAtualizada){
//        Optional<Denuncia> denunciaOptional = this.denunciaRepository.findById(id);
//
//        if(denunciaOptional.isEmpty()){
//            throw new RuntimeException("Denúncia não encontrada");
//        } else {
//            Denuncia denuncia = denunciaOptional.get();
//            denuncia.setTipo(denunciaAtualizada.getTipo());
//            denuncia.setRelato(denunciaAtualizada.getRelato());
//            denuncia.setLocal(denunciaAtualizada.getLocal());
//            denuncia.setCep(denunciaAtualizada.getCep());
//            denuncia.setStatus(denunciaAtualizada.getStatus());
//
//            return this.denunciaRepository.save(denuncia);
//        }
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
