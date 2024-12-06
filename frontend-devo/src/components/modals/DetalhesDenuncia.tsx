import { useModal } from "../../contexts/ModalContext";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDenuncia } from "../../contexts/DenunciaContext";
import Modal from "../global/Modal";

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
    <Modal>
        <div key={denuncia.idDenuncia}>
            <div className="w-full h-full space-y-2 bg-white text-black rounded-md">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <div className="bg-red w-8 h-8 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full"></div>
                  <h1 className="font-bold text-xl sm:text-4xl ">
                    #{denuncia.tipo} (2km)
                  </h1>
                </div>
                <button
                  onClick={() => handleShow("detalhesDenuncia")}
                  className="rotate-45 text-3xl"
                >
                  +
                </button>
              </div>
              <h1 className="text-xl md:text-xl lg:text-2xl font-bold line-clamp-2">
                Localização: {denuncia.geolocation.local}
              </h1>

              <div className="grid gap-2">
                <div>
                  <h1 className="font-bold text-xl lg:text-xl my-0 line-clamp-1">
                    Ocorrência: <span>{denuncia.idDenuncia}</span>
                  </h1>
                  <p>Nome da vítima: {denuncia.vitima?.nome} </p>
                  <p>Sexo: {denuncia.vitima?.sexo}</p>
                  <p>Idade: {denuncia.vitima?.idade}</p>
                  <p>Situação informada: {denuncia.relato}</p>
                  <p>Tipo de caso: {denuncia.tipo}</p>
                </div>
              </div>

              <div className="grid">
                <h1 className="font-bold text-xl mt-2 mb-0">
                  Informações da cena
                </h1>
                <p>Pessoa suspeita: {denuncia.suspeito?.nome}</p>
                <p>Sexo: {denuncia.suspeito?.sexo}</p>
                <p>Idade: {denuncia.suspeito?.idade}</p>
                <p>Descrição: {denuncia.suspeito?.descricao}</p>
              </div>
            </div>
          </div>
    </Modal>
  );
}
