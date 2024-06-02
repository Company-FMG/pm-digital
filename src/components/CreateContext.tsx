import React, { createContext, ReactNode, useState } from "react";
interface StateContextProps {
  show: boolean;
  handleShow: () => void;
  isModalOpen: boolean;
  handleModal: () => void;
}

export const StateContext = createContext<StateContextProps | undefined>(
  undefined
);

interface StateProviderProps {
  children: ReactNode;
}

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <StateContext.Provider
      value={{ show, handleShow, isModalOpen, handleModal }}
    >
      {children}
    </StateContext.Provider>
  );
};
