import { useHistory } from "react-router";
import { useModal } from "../../contexts/ModalContext";
import Modal from "../global/Modal";
import rightarrow from "../../assets/rightarrow.svg";

export default function OcorrenciaFinalizada(){
    const { showOcorrenciaFinalizada, handleShow } = useModal();
    const history = useHistory();

    if(!showOcorrenciaFinalizada){
        return null;
    }

    return(
        <Modal>
            <div className="w-80 h-40 justify-items-center">
                <p className="text-xl text-center mb-6">Ocorrência finalizada.<br/>Agradecemos por usar<br/> PM Digital.</p>
                <button className="bg-bluemike text-xl text-white p-2 rounded-xl px-4 py-2 flex " onClick={() => { handleShow("ocorrenciaFinalizada"); history.push('/home') }}>
                    VOLTAR
                </button>
            </div>
        </Modal>
    );   
};