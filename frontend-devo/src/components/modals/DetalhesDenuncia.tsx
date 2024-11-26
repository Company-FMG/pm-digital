import { useModal } from "../../contexts/ModalContext";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDenuncia } from "../../contexts/DenunciaContext";

export default function DetalhesDenuncia() {
  const { showDetalhesDenuncia, handleShow } = useModal();

  if (!showDetalhesDenuncia) {
    return null;
  }
  const { denuncia } = useDenuncia();
  
  if (!denuncia) {
    return <div>Sem detalhes disponíveis no momento</div>;
  }
  
  return (
    <div>

        <div key={denuncia.idDenuncia}>
          <div className="absolute top-2/4 right-2/4 translate-x-2/4 -translate-y-2/4">
            <div className="w-96 max-w-7xl space-y-4 bg-white text-black rounded-md mx-auto my-auto px-8 py-8 border-bluemike border-2">
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-red w-8 h-8 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full"></div>
                <h1 className="font-bold text-xl sm:text-4xl ">
                  #{denuncia.tipo} (2km)
                </h1>
                <button
                  onClick={() => handleShow("detalhesDenuncia")}
                  className="absolute right-10 rotate-45 text-4xl"
                >
                  +
                </button>
              </div>
              <h1 className="text-xl md:text-xl lg:text-2xl font-bold line-clamp-2">
                Localização: {denuncia.geolocation.local}
              </h1>

                <div className="flex flex-col gap-3">
                  <p>Relato: {denuncia.relato}</p>
                  <p>Nome da vítima: {denuncia.vitima?.nome} </p>
                  <p>Sexo: {denuncia.vitima?.sexo}</p>
                  <p>Idade: {denuncia.vitima?.idade}</p>
                  <p>Pessoa suspeita: {denuncia.suspeito?.nome}</p>
                  <p>Sexo: {denuncia.suspeito?.sexo}</p>
                  <p>Idade: {denuncia.suspeito?.idade}</p>
                  <p>Descrição: {denuncia.suspeito?.descricao}</p>
                </div>
                   
            </div>
          </div>
        </div>

    </div>
  );
}
