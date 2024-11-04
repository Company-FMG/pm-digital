import { createContext, useContext, useState } from "react";

interface ComplaintFormContextProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

interface FormProviderProps {
    children: React.ReactNode;
}

interface Geolocation {
    lat: number;
    lng: number;
}

// interface Vitima {
//     nomeVitima: string;
//     sexoVitima: string;
//     idadeVitima: number;
// }

// interface Suspeito {
//     nomeSuspeito: string;
//     sexoSuspeito: string;
//     idadeSuspeito: number;
//     descricaoSuspeito: string;
// }

interface FormData {
    tipo: string;
    local: string;
    cep: string | undefined;
    relato: string;
    referencia: string;
    geolocation?: Geolocation | null;
    nomeVitima: string | undefined;
    sexoVitima: string | undefined;
    idadeVitima: number | undefined;
    nomeSuspeito: string | undefined;
    sexoSuspeito: string | undefined;
    idadeSuspeito: number | undefined;
    descricaoSuspeito: string | undefined;
    status: string;
    lat: number;
    lng: number;
}

const FormContext = createContext<ComplaintFormContextProps | undefined>(undefined)

export const FormProvider = ({children}:FormProviderProps) => {
    const [formData, setFormData] = useState<FormData>({
        tipo: "",
        local: "",
        cep: undefined,
        relato: "",
        referencia: "",
        geolocation: null,
        nomeVitima: "",
        sexoVitima: "",
        idadeVitima: 0,
        nomeSuspeito: "",
        sexoSuspeito: "",
        idadeSuspeito: 0,
        descricaoSuspeito: "",
        status: "EM_ABERTO",
        lat: 0,
        lng: 0
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => {
    const context = useContext(FormContext)
    if (!context) {
        throw new Error("useForm must be used within a FormProvider")
    }
    return context;
}