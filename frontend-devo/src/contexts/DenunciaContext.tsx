import React, { createContext, useContext, useState } from "react";

interface Geolocation {
  lat: number;
  lng: number;
  local: string;
}

 interface Vitima {
    nome: string;
    sexo: string;
    idade: number;
 }

 interface Suspeito {
     nome: string;
     sexo: string;
     idade: number;
     descricao: string;
 }

interface Denuncia {
  geolocation: Geolocation;
  idDenuncia: string;
  tipo: string;
  relato: string;
  vitima?: Vitima;
  suspeito?: Suspeito;
}

interface DenunciaContextProps {
  denuncia: Denuncia | null;
  setDenuncia: React.Dispatch<React.SetStateAction<Denuncia | null>>;
}

const DenunciaContext = createContext<DenunciaContextProps | undefined>(undefined);

export const DenunciaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [denuncia, setDenuncia] = useState<Denuncia | null>(null);

  return (
    <DenunciaContext.Provider value={{ denuncia, setDenuncia }}>
      {children}
    </DenunciaContext.Provider>
  );
};

export const useDenuncia = () => {
  const context = useContext(DenunciaContext);
  if (!context) {
    throw new Error("useDenuncia deve ser usado dentro de um DenunciaProvider");
  }
  return context;
};
