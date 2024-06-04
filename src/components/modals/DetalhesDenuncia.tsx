import { IonContent, IonPage } from "@ionic/react";
import Modal from "../global/Modal";
import { useModal } from "../../contexts/ModalContext";
import axios from "axios";
import { useState, useEffect } from "react";

export default function DetalhesDenuncia() {
  const { showDetalhesDenuncia, handleShow } = useModal();

  if (!showDetalhesDenuncia) {
    return null;
  }
  const [denuncias, setDenuncias] = useState([]);

  
  useEffect(() => {
     axios
      .get("http://localhost:8080/api/denuncias")
      .then((response) => {
        setDenuncias(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);
  
  return (
    <div>
      {denuncias.map((denuncia: any) => (
        <div key={denuncia.id}>
          <div className="absolute top-2/4 right-2/4 translate-x-2/4 -translate-y-2/4">
            <div className="w-96 max-w-7xl space-y-2 bg-white text-black rounded-md mx-auto my-auto px-8 pt-2 pb-8">
              <div className="flex flex-row gap-4 items-center">
                <div className="bg-red w-8 h-8 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full"></div>
                <h1 className="font-bold text-xl sm:text-4xl ">
                  #121 - VBG (2km)
                </h1>
                <button
                  onClick={() => handleShow("detalhesDenuncia")}
                  className="absolute right-10 rotate-45 text-2xl"
                >
                  +
                </button>
              </div>
              <h1 className="text-xl md:text-xl lg:text-2xl font-bold">
                Localização: {denuncia.endereco}
              </h1>

              <div className="grid gap-2">
                <div>
                  <h1 className="font-bold text-xl lg:text-xl my-0">
                    Ocorrência N°: {denuncia.id}{" "}
                  </h1>
                  <p>Nome da vítima: {denuncia.vitima} </p>
                  <p>Sexo: Masculino</p>
                  <p>Idade: 40</p>
                  <p>Situação informada: {denuncia.infoCena}</p>
                  <p>Tipo de caso: {denuncia.situacaoInformada}</p>
                </div>
              </div>

              <div className="grid">
                <h1 className="font-bold text-xl mt-2 mb-0">
                  Informações da cena
                </h1>
                <p>Pessoa suspeita: João do pé de feijão</p>
                <p>Sexo: Masculino</p>
                <p>Idade: Não informada</p>
                <p>Descrição: Tem um pé de feijão</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
