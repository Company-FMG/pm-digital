package com.fmgcompany.mike.service;

import com.fmgcompany.mike.model.Denuncia;
import com.fmgcompany.mike.model.Status;
import com.fmgcompany.mike.repository.DenunciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class DenunciaService {
    @Autowired
    private DenunciaRepository denunciaRepository;

    //get
    public List<Denuncia> listaDenuncias(){
        return this.denunciaRepository.findAll();
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
    public Denuncia atualizaDenuncia(UUID id, Denuncia denunciaAtualizada){
        Optional<Denuncia> denunciaOptional = this.denunciaRepository.findById(id);

        if(denunciaOptional.isEmpty()){
            throw new RuntimeException("Denúncia não encontrada");
        } else {
            Denuncia denuncia = denunciaOptional.get();
            denuncia.setTipo(denunciaAtualizada.getTipo());
            denuncia.setRelato(denunciaAtualizada.getRelato());
            denuncia.setLocal(denunciaAtualizada.getLocal());
            denuncia.setCep(denunciaAtualizada.getCep());
            denuncia.setStatus(denunciaAtualizada.getStatus());

            return this.denunciaRepository.save(denuncia);
        }
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
