import { useModal } from "../ModalContext";
import Modal from "../global/Modal";

export default function RegistrarBO(){
    const { showRegistrarBO, handleShow } = useModal();

    if(!showRegistrarBO){
        return null;
    }

    return(
        <Modal>
            <div className="w-80 h-40 space-y-3">
                <h2 className="text-2xl font-bold">Registrar Boletim de Ocorrência</h2>
                <button onClick={() => {handleShow("registrarBO"); handleShow("insereRelatorio")}} className="text-center bg-bluemike text-xl text-[#FFFFFF] p-2 rounded-xl h-14 w-32">
                    Concordo
                </button>
            </div>
        </Modal>
    );   
};