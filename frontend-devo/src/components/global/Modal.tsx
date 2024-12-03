import { useModal } from "../../contexts/ModalContext";

interface ModalProps{
    children: React.ReactNode;
}

function Modal({ children }: ModalProps){
    
    return(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-80"></div>
            
            {/* Modal Content */}
            <div className="relative z-[9999] rounded-xl drop-shadow-md bg-white p-5 mx-5">
                {children}
            </div>
        </div>
    );
}

export default Modal;