import { useHistory } from "react-router-dom";
import Modal from "../global/Modal";
import { useModal } from "../../contexts/ModalContext";

export default function SobreMike() {
    const { showSobreMike, handleShow } = useModal();
    const history = useHistory();

    if (!showSobreMike) {
        return null;
    }

    return (
        <Modal>
            <div className="w-full h-full space-y-3">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-2xl font-bold">Sobre o PM Digital</h2>
                    <button className="rotate-45 text-3xl" onClick={() => { handleShow("sobreMike"); }}>+</button>
                </div>
                <div className="text-lg text-justify flex flex-col gap-2">
                    <p>
                    Tecnologia inovadora para
                    facilitar denúncias e
                    agilizar ações de prevenção
                    a violência e situações
                    emergentes.
                    </p>
                    <div className="flex flex-col gap-2">
                        <p>Desenvolvedores responsáveis</p>
                        <ol className="flex flex-col gap-1 list-disc ml-5">
                            <li>Ana Carolyne Costa</li>
                            <li>Iale Almeida</li>
                            <li>Lorenzo Leão</li>
                            <li>Luís Silvestre</li>
                            <li>Nicholas Bergqvist</li>
                            <li>Rafael Figuerôa</li>
                        </ol>
                    </div>

                </div>
            </div>
        </Modal>
    );
};