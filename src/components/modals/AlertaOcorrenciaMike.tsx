import { useState, useEffect } from "react";
import rightarrow from "../../assets/rightarrow.svg";
import usePolling from "../../hooks/usePolling";
import { useModal } from "../../contexts/ModalContext";
import { useMap } from "../../contexts/MapContext";
import Modal from "../global/Modal";

export default function AlertaOcorrenciaMike() {
  const { showAlertaOcorrencia, handleShow } = useModal();
  const { setShowMap } = useMap();
  const [latestDenuncia, setLatestDenuncia] = useState(null);

  const { data: denuncias } = usePolling(
    "http://localhost:8080/api/denuncias",
    5000
  );

  useEffect(() => {
    if (denuncias && denuncias.length > 0) {
      const mostRecentDenuncia = denuncias[denuncias.length - 1];
      if (!latestDenuncia || mostRecentDenuncia.id !== latestDenuncia.id) {
        setLatestDenuncia(mostRecentDenuncia);
        setTimeout(() => {
          handleShow("alertaOcorrencia");
        }, 4000);
      }
    }
  }, [denuncias, latestDenuncia, handleShow]);

  if (!showAlertaOcorrencia) {
    return null;
  }

  return (
    <Modal>
      <div>
        <h1 className="text-xl font-bold">ALERTA DE OCORRÊNCIA</h1>
      </div>
      <div>
        <p>{latestDenuncia ? latestDenuncia.endereco : ""}</p>
      </div>
      <div>
        <p>
          <a href="">Ver mais</a>
        </p>
      </div>
      <div>
        <button
          className="text-center bg-bluemike text-lg text-white rounded-xl h-[50] w-max px-8 py-4"
          onClick={() => {
            setShowMap(true);
            handleShow("alertaOcorrencia");
          }}
        >
          A CAMINHO
          <img
            className="pl-4 inline-block fill-white"
            src={rightarrow}
            alt=""
          />
        </button>
      </div>
    </Modal>
  );
}
