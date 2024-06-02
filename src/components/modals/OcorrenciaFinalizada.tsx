import { useModal } from "../ModalContext";
import Modal from "../global/Modal";

export default function OcorrenciaFinalizada(){
    const { handleShow } = useModal();

    return(
        <Modal>
            <div className="w-80 h-40">
                <button className="absolute right-5 top-5 rotate-45 text-2xl" onClick={handleShow}>+</button>
                <p className="text-xl">Ocorrência finalizada.<br/>Agradecemos por usar<br/>o MIKE.</p>
            </div>
        </Modal>
    );   
};