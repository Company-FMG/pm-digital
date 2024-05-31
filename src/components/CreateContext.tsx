import React, { createContext, useState } from "react";

export const StateContext = createContext(false);

export const StateProvider = ({ children }) => {
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
