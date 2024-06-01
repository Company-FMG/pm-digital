interface ModalProps{
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

function Modal({ isVisible, onClose, children }: ModalProps){
    if(!isVisible){
        return null;
    }

    return(
        <div className="fixed bg-orange-500 top-0">
            {children}
        </div>
    );
}

export default Modal;