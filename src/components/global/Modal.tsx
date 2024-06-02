import { useContext } from "react";
import { ModalContext } from "../ModalContext";

interface ModalProps{
    children: React.ReactNode;
}

function Modal({ children }: ModalProps){
    const modalContext = useContext(ModalContext);

    if (!modalContext) {
        throw new Error("ControlComponent must be used within a StateProvider");
    }
    const { handleShow } = modalContext;

    return(
        <div className="bg-orange-500 mx-auto">
            {children}
        </div>
    );
}

export default Modal;