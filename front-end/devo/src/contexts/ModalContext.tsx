import { createContext, ReactNode, useContext, useState, useEffect } from "react";

//interface do contexto
interface ModalContextProps {
  showAlertaOcorrencia: boolean;
  showRegistrarBO: boolean;
  showInsereRelatorio: boolean;
  showOcorrenciaFinalizada: boolean;
  showDetalhesDenuncia: boolean;
  showSobreMike: boolean;
  showOpcoes: boolean;
  endereco: string;
  handleShow: (modal: string) => void;
  handleEndereco: (endereco: string) => void;
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
  const [endereco, setEndereco] = useState("");
  const [showAlertaOcorrencia, setShowAlertaOcorrencia] = useState(false);
  const [showRegistrarBO, setShowRegistrarBO] = useState(false);
  const [showInsereRelatorio, setShowInsereRelatorio] = useState(false);
  const [showOcorrenciaFinalizada, setShowOcorrenciaFinalizada] = useState(false);
  const [showDetalhesDenuncia, setShowDetalhesDenuncia] = useState(false);
  const [showSobreMike, setShowSobreMike] = useState(false);
  const [showOpcoes, setShowOpcoes] = useState(false);

  const handleShow = (modal: string) => {
    if (modal === "alertaOcorrencia") {
      console.log("alertaOcorrencia");
      setShowAlertaOcorrencia(!showAlertaOcorrencia);
    } else if (modal === "registrarBO") {
      console.log("registrarBO");
      setShowRegistrarBO(!showRegistrarBO);
    } else if (modal === "insereRelatorio") {
      console.log("insereRelatorio");
      setShowInsereRelatorio(!showInsereRelatorio);
    } else if (modal === "ocorrenciaFinalizada") {
      console.log("ocorrenciaFinalizada");
      setShowOcorrenciaFinalizada(!showOcorrenciaFinalizada);
    } else if (modal === "detalhesDenuncia") {
      console.log("detalhesDenuncia");
      setShowDetalhesDenuncia(!showDetalhesDenuncia);
    } else if (modal === "sobreMike") {
      console.log("sobreMike");
      setShowSobreMike(!showSobreMike);
    } else if (modal === "opcoes") {
      console.log("opcoes");
      setShowOpcoes(!showOpcoes);
    }
  };

  const handleEndereco = (enderecoRecebido: string) => {
    console.log(typeof (endereco));
    setEndereco(enderecoRecebido);
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'test') {
      (window as any)._testHandleShow = handleShow;
    }
  }, [handleShow]);

  return (
    <ModalContext.Provider
      value={{
        endereco,
        showAlertaOcorrencia,
        showRegistrarBO,
        showInsereRelatorio,
        showOcorrenciaFinalizada,
        showDetalhesDenuncia,
        showSobreMike,
        showOpcoes,
        handleShow,
        handleEndereco,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

//cria um hook personalizado para puxar o contexto
export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
