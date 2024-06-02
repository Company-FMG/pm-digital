import { createContext, ReactNode, useState } from "react";
interface ModelContextProvider {
  show: boolean;
  handleShow: () => void;
}

export const ModalContext = createContext<ModelContextProvider | undefined>(
  undefined
);

interface ModalProviderProps {
  children: ReactNode;
}

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
