import { createContext, useContext, useState, ReactNode } from "react";
import defaultPfp from "../assets/pfp-default.jpg";

interface ProfileContextProps {
    selectedImage: string | null;
    setSelectedImage: (image: string | null) => void;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
    const [selectedImage, setSelectedImageState] = useState<string | null>(defaultPfp);

    // Carregar a imagem do localStorage na inicialização
    // useEffect(() => {
    //     const savedImage = localStorage.getItem("selectedImage");
    //     if (savedImage) {
    //         setSelectedImageState(savedImage); // Carrega a imagem salva
    //     }
    // }, []);

    // Função para salvar a imagem no estado e no localStorage
    const setSelectedImage = (image: string | null) => {
        if (image) {
            localStorage.setItem("selectedImage", image); // Salva no localStorage
        } else {
            localStorage.removeItem("selectedImage"); // Remove do localStorage
        }
        setSelectedImageState(image); // Atualiza o estado
    };

    return (
        <ProfileContext.Provider value={{ selectedImage, setSelectedImage }}>
            {children}
        </ProfileContext.Provider>
    );
}

export function useProfile() {
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error("useProfile must be used within a ProfileProvider");
    }
    return context;
}
