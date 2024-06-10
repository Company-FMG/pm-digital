package com.fmgcompany.mike.service;

import com.fmgcompany.mike.model.Denuncia;
import com.fmgcompany.mike.repository.DenunciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DenunciaService {
    @Autowired
    private DenunciaRepository denunciaRepository;

    //get
    public List<Denuncia> listaDenuncias(){
        return this.denunciaRepository.findAll();
    }

    //get
    public Optional<Denuncia> buscaDenunciaPeloId(Long id){
        return  this.denunciaRepository.findById(id);
    }

    //set
    public Object criaDenuncia(Denuncia denuncia){
        return this.denunciaRepository.save(denuncia);
    }

    //put
    public Object atualizaDenuncia(Long id, Denuncia denunciaAtualizada){
        Optional<Denuncia> denunciaOptional = this.denunciaRepository.findById(id);

        if(denunciaOptional.isEmpty()){
            throw new RuntimeException("Denúncia não encontrada");
        } else {
            Denuncia denuncia = denunciaOptional.get();
            denuncia.setSituacaoInformada(denunciaAtualizada.getSituacaoInformada());
            denuncia.setEndereco(denunciaAtualizada.getEndereco());
            denuncia.setMapa(denunciaAtualizada.getMapa());
            denuncia.setStatus(denunciaAtualizada.getStatus());
            denuncia.setInfoCena(denunciaAtualizada.getInfoCena());

            return this.denunciaRepository.save(denuncia);
        }
    }


    //delete
    public void removeDenuncia(Long id){
        Optional<Denuncia> denuncia = this.denunciaRepository.findById(id);

        if(denuncia.isEmpty()){
            throw new RuntimeException("Denúncia não encontrada");
        } else {
            this.denunciaRepository.deleteById(id);
        }
    }


}
