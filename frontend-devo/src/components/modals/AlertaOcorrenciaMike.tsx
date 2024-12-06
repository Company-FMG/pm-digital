import { usePolling } from "../../hooks/usePolling";
import { useModal } from "../../contexts/ModalContext";
import Modal from "../global/Modal";
import { useEffect, useState } from "react";
import rightarrow from "../../assets/rightarrow.svg";

interface Denuncia {
  tipo: string;
  geolocation: Geolocation;
}

interface Geolocation {
  local: string;
}

export default function AlertaOcorrenciaMike() {
  const apiUrl = import.meta.env.VITE_API_URL!;
  const { showAlertaOcorrencia, handleShow } = useModal();
  const [viewState, setViewState] = useState(true);

  // Chama o hook de polling para buscar a denúncia a cada 10 segundos
  const { data: latestDenuncia, error } = usePolling<Denuncia>(
    `${apiUrl}/viaturas/${localStorage.getItem("placaViatura")}/denuncia`,
    10000
  );

  function handleView(){
    setViewState(!viewState);
  }

  useEffect(() => {
    if (latestDenuncia && !showAlertaOcorrencia) {
      handleShow("alertaOcorrencia");
    }
  }, [latestDenuncia, showAlertaOcorrencia, handleShow ]);

  if (!showAlertaOcorrencia || !latestDenuncia) {
    return null;
  }

  return (
    <div className={`${viewState ? "flex" : "hidden" }`}>
    <Modal>
      <div className="flex flex-col justify-center items-center text-center gap-2">
        <h1 className="text-xl font-bold">ALERTA DE OCORRÊNCIA</h1>
        <p className="font-bold">{latestDenuncia.tipo}</p>
        <p>{latestDenuncia.geolocation.local}</p>
      </div>
        
      <div>
        <button
          className="w-full text-center bg-bluemike text-lg text-white rounded-xl px-8 py-4 mt-4"
          onClick={() => {
            handleView();
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
    </div>
  );
}
