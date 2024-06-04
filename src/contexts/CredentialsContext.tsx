import { createContext, ReactNode, useContext, useState } from "react";
import { usePhotoGallery, UserPhoto } from "../hooks/usePhotoGallery";

//interface do contexto
interface CredentialsContextProps {
    nome: string,
    matricula: string,
    senha: string,
    cargo: string,
    idade: number,
    pfp: UserPhoto,
    handleLogin: (matricula: string, senha: string) => void;
}

//contexto inicia indefinido
export const CredentialsContext = createContext<CredentialsContextProps | undefined>(
    undefined
);

//interface do provider
interface CredentialsProviderProps {
    children: ReactNode;
}

//define o provider do context
export const CredentialsProvider = ({ children }: CredentialsProviderProps) => {
    const { photo } = usePhotoGallery();

    const [nome, setNome] = useState("Roberto Nascimento");
    const [matricula, setMatricula] = useState("#23BPRMR345");
    const [senha, setSenha] = useState("");
    const [cargo, setCargo] = useState("Cap.");
    const [idade, setIdade] = useState(40);
    const [pfp, setPfp] = useState(photo);

    const handleLogin = (matricula: string, senha: string) => {
        
    }

    return (
        <CredentialsContext.Provider
        value={{
            nome,
            matricula,
            senha,
            cargo,
            idade,
            pfp,
            handleLogin
        }}
        >
        {children}
        </CredentialsContext.Provider>
    );
};

//cria um hook personalizado para puxar o contexto
export const useCredentials = (): CredentialsContextProps => {
    const context = useContext(CredentialsContext);
    if (context === undefined) {
        throw new Error("useCredentials must be used within a CredentialsProvider");
    }
    return context;
};
