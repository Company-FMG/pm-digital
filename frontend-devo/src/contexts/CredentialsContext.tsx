import { createContext, ReactNode, useContext, useState } from "react";
import { usePhotoGallery, UserPhoto } from "../hooks/usePhotoGallery";

//interface do contexto
interface CredentialsContextProps {
    nome: string,
    matricula: string,
    senha: string,
    cargo: string,
    idade: number,
    pfp: string,
    handleLogin: (matricula: string, senha: string) => void;
    handleChangePhoto: (photo: string) => void;
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
    const [pfp, setPfp] = useState("https://migration-polopoly.otempo.com.br/polopoly_fs/3.219668.1534216140!httpImage/image.jpg_gen/derivatives/hard-news-img-medium-fit_380/image.jpg");

    const handleLogin = (matricula: string, senha: string) => {
        
    }

    const handleChangePhoto = (photo: string) => {
        console.log("change photo");
        setPfp(photo);
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
            handleLogin,
            handleChangePhoto,
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
