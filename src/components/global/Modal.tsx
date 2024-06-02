import { useModal } from "../ModalContext";

interface ModalProps{
    children: React.ReactNode;
}

function Modal({ children }: ModalProps){
    return(
        <div className="fixed top-2/4 right-2/4 translate-x-2/4 -translate-y-3/4">
            <div className="lg:flex lg:justify-center">
                <div className="rounded-xl drop-shadow-md bg-white *:flex *:flex-col min-h-full *:items-center *:justify-center p-7 text-center">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;