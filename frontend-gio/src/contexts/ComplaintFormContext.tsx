import { createContext, useContext, useState } from "react";

interface ComplaintFormContextProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

interface FormProviderProps {
    children: React.ReactNode;
}

interface FormData {
    tipo: string;
    local: string;
    cep: string | undefined;
    relato: string;
    referencia: string;
    geolocation: {lat: number, lng: number} | null;
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