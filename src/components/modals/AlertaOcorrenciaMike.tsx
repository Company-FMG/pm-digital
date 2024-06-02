import rightarrow from "../../assets/rightarrow.svg";
import { useModal } from "../ModalContext";
import Modal from "../global/Modal";

export default function AlertaOcorrenciaMike() {
  const { showAlertaOcorrencia, handleShow } = useModal();

  if(!showAlertaOcorrencia){
      return null;
  }

  return (
      <Modal>
            <div className="">
              <h1 className="text-xl font-bold">ALERTA DE OCORRÊNCIA</h1>
            </div>
            <div>
              <p>Exemplo</p>
            </div>
            <div>
              <p>
                <a href="">Ver mais</a>
              </p>
            </div>
            <div>
              <button
                className="text-center bg-bluemike text-lg text-white rounded-xl h-[50] w-max px-8 py-4"
                onClick={() => handleShow("alertaOcorrencia")}
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
