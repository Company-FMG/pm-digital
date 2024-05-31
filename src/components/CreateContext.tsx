import React, { createContext, ReactNode, useState } from "react";
interface StateContextProps {
  show: boolean;
  handleShow: () => void;
}

export const StateContext = createContext<StateContextProps | undefined>(
  undefined
);

interface StateProviderProps {
  children: ReactNode;
}

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <StateContext.Provider value={{ show, handleShow }}>
      {children}
    </StateContext.Provider>
  );
};
