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
            <div className="w-80 h-40">
                <p className="text-xl">Ocorrência finalizada.<br/>Agradecemos por usar<br/>o MIKE.</p>
                <button className="bg-bluemike text-xl text-white p-2 rounded-xl px-4 py-2 flex " onClick={() => { handleShow("ocorrenciaFinalizada"); history.push('/') }}>
                    <img
                        className="px-2 inline-block fill-white rotate-180"
                        src={rightarrow}
                        alt=""
                    />
                    VOLTAR
                </button>
            </div>
        </Modal>
    );   
};