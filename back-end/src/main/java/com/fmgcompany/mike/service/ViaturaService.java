package com.fmgcompany.mike.service;

import com.fmgcompany.mike.model.Denuncia;
import com.fmgcompany.mike.model.Viatura;
import com.fmgcompany.mike.repository.ViaturaRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ViaturaService {
    @Autowired
    private ViaturaRepository viaturaRepository;

    @Transactional
    public List<Viatura> listarTodas(){
        return this.viaturaRepository.findAll();
    }

    @Transactional
    public Optional<Viatura> buscarPorId(UUID id){
        return this.viaturaRepository.findById(id);
    }

    @Transactional
    public Denuncia denunciaViatura(String placa){
        Optional<Viatura> viaturaOptional = this.viaturaRepository.findByPlaca(placa);

        if(viaturaOptional.isPresent()){
            Viatura viatura = viaturaOptional.get();

            return viatura.getDenuncia();
        } else {
            return null;
        }
    }

    public Viatura criarViatura(Viatura viatura){
        return viaturaRepository.save(viatura);
    }

    public Viatura atualizar(Viatura viatura){
        return viaturaRepository.save(viatura);
    }

    public void deletarPorId(UUID id){
        this.viaturaRepository.deleteById(id);
    }

    //método puxado em Post de DenunciaController
    public boolean isDisponivel(UUID id) {
        return viaturaRepository.findById(id)
                .map(viatura -> viatura.getDenuncia() == null)
                .orElse(false);
    }

}
