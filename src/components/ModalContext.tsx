import { createContext, ReactNode, useContext, useState } from "react";

//interface do contexto
interface ModalContextProps {
  show: boolean;
  handleShow: () => void;
}

//contexto inicia indefinido
export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);

//interface do provider
interface ModalProviderProps {
  children: ReactNode;
}

//define o provider do context
export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <ModalContext.Provider value={{ show, handleShow }}>
      {children}
    </ModalContext.Provider>
  );
};

//cria um hook personalizado para puxar o contexto
export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};