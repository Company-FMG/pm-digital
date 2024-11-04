package com.fmgcompany.mike.mapper;

import com.fmgcompany.mike.dto.DenunciaDTO;
import com.fmgcompany.mike.model.*;
import org.springframework.stereotype.Component;

@Component
public class DenunciaMapper {

    public DenunciaDTO toDTO(Denuncia denuncia) {
        DenunciaDTO denunciaDTO = new DenunciaDTO();

        denunciaDTO.setIdDenuncia(denuncia.getId());
        denunciaDTO.setTipo(denuncia.getTipo());
        denunciaDTO.setRelato(denuncia.getRelato());
        denunciaDTO.setReferencia(denuncia.getReferencia());
        denunciaDTO.setStatus(denuncia.getStatus());

        if (denuncia.getVitima() != null) {
            denunciaDTO.setNomeVitima(denuncia.getVitima().getNome());
            denunciaDTO.setSexoVitima(denuncia.getVitima().getSexo());
            denunciaDTO.setIdadeVitima(denuncia.getVitima().getIdade());
        }

        if (denuncia.getSuspeito() != null) {
            denunciaDTO.setNomeSuspeito(denuncia.getSuspeito().getNome());
            denunciaDTO.setSexoSuspeito(denuncia.getSuspeito().getSexo());
            denunciaDTO.setIdadeSuspeito(denuncia.getSuspeito().getIdade());
            denunciaDTO.setDescricaoSuspeito(denuncia.getSuspeito().getDescricao());
        }

        if (denuncia.getGeolocation() != null) {
            denunciaDTO.setLocal(denuncia.getGeolocation().getLocal());
            denunciaDTO.setCep(denuncia.getGeolocation().getCep());
            denunciaDTO.setLat(denuncia.getGeolocation().getLat());
            denunciaDTO.setLng(denuncia.getGeolocation().getLng());
        }
        return denunciaDTO;
    }

    public Denuncia toEntity(DenunciaDTO denunciaDTO) {
        Denuncia denuncia = new Denuncia();

        denuncia.setTipo(denunciaDTO.getTipo());
        denuncia.setRelato(denunciaDTO.getRelato());
        denuncia.setReferencia(denunciaDTO.getReferencia());
        denuncia.setStatus(denunciaDTO.getStatus());

        if (denunciaDTO.getNomeVitima() != null) {
            Vitima vitima = new Vitima();
            vitima.setNome(denunciaDTO.getNomeVitima());
            vitima.setSexo(denunciaDTO.getSexoVitima());
            vitima.setIdade(denunciaDTO.getIdadeVitima());
            denuncia.setVitima(vitima);
        }

        if (denunciaDTO.getNomeSuspeito() != null) {
            Suspeito suspeito = new Suspeito();
            suspeito.setNome(denunciaDTO.getNomeSuspeito());
            suspeito.setSexo(denunciaDTO.getSexoSuspeito());
            suspeito.setIdade(denunciaDTO.getIdadeSuspeito());
            suspeito.setDescricao(denunciaDTO.getDescricaoSuspeito());
            denuncia.setSuspeito(suspeito);
        }

        if (denunciaDTO.getLocal() != null) {
            Geolocation geolocation = new Geolocation();
            geolocation.setLocal(denunciaDTO.getLocal());
            geolocation.setCep(denunciaDTO.getCep());
            geolocation.setLat(denunciaDTO.getLat());
            geolocation.setLng(denunciaDTO.getLng());
            denuncia.setGeolocation(geolocation);
        }

        return denuncia;
    }
}
