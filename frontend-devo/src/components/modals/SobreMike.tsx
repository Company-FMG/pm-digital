import { useHistory } from "react-router-dom";
import Modal from "../global/Modal";
import { useModal } from "../../contexts/ModalContext";

export default function SobreMike(){
    const { showSobreMike, handleShow } = useModal();
    const history = useHistory();

    if(!showSobreMike){
        return null;
    }

    return(
        <Modal>
            <div className="w-72 h-96 space-y-3">
                <h2 className="text-2xl font-bold">Sobre o PM Digital</h2>
                <button className="absolute right-5 top-5 rotate-45 text-2xl" onClick={() => { handleShow("sobreMike"); history.push('/') }}>+</button>
                <p className="text-xl">
                    Tecnologia inovadora para<br/>
                    facilitar denúncias e <br/>
                    agilizar ações de prevenção<br/>
                    a violência e situações<br/>
                    emergentes.<br/>
                    Desenvolvedores resposáveis:<br/>
                      - Ana Carolyne Costa<br/>
                      - Iale Almeida<br/>
                      - Lorenzo Leão<br/>
                      - Luís Silvestre<br/>
                      - Nicholas Bergqvist<br/>
                      - Rafael Figuerôa
                </p>
            </div>
        </Modal>
    );   
};