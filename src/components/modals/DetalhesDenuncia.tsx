import { IonContent, IonPage } from "@ionic/react";
import Modal from "../global/Modal";
import { useModal } from "../ModalContext";
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
          <div className="absolute top-0">
            <div className="w-96 sm:w-[700px] max-w-7xl space-y-4 bg-white text-black rounded-md mx-auto my-auto px-6 py-4">
              <div className="flex flex-row gap-4 items-center">
                <div className="bg-red w-8 h-8 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full"></div>
                <h1 className="font-bold text-3xl sm:text-4xl ">
                  #121 - VBG (2km)
                </h1>
                <button
                  onClick={() => handleShow("detalhesDenuncia")}
                  className="md:ml-56 rotate-45 text-4xl"
                >
                  +
                </button>
              </div>
              <h1 className="text-2xl md:text-xl lg:text-2xl font-bold">
                Localização: <br></br>
                {denuncia.endereco}
              </h1>

              <div className="grid gap-4">
                <div>
                  <h1 className="font-bold md:text-xl lg:text-2xl">
                    Ocorrência N°: {denuncia.id}{" "}
                  </h1>
                  <p>Nome da vítima:{denuncia.vitima} </p>
                  <p>Sexo: Masculino</p>
                  <p>Idade: 40</p>
                  <p>Situação informada: {denuncia.infoCena}</p>
                  <p>Tipo de caso: {denuncia.situacaoInformada}</p>
                </div>
              </div>

              <div className="grid gap-4 mt-20">
                <h1 className="font-bold md:text-xl lg:text-2xl">
                  Informações da cena
                </h1>
                <p>Pessoa suspeita: </p>
                <p>Sexo: </p>
                <p>Idade: </p>
                <p className="mb-8">Descrição: </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
