import {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonFooter,
} from "@ionic/react";
import NavbarMike from "../components/global/NavbarMike";
import { useHistory } from "react-router-dom";
import { useModal } from "../contexts/ModalContext";
import OcorrenciaFinalizada from "../components/modals/OcorrenciaFinalizada";
import axios from "axios";
import { useEffect, useState } from "react";

interface Denuncia{
    id: string;
}

export default function Relatorio() {
    const history = useHistory();
    const apiUrl = import.meta.env.VITE_API_URL!;
    const { handleShow } = useModal();
    const [idDenuncia, setIdDenuncia] = useState("");
    const [relatorio, setRelatorio] = useState("");

    const fetchDenuncia = async () => {
        try {
          const response = await axios.get<Denuncia>(`${apiUrl}/viaturas/${localStorage.getItem("placaViatura")}/denuncia`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          });
          console.log(response.data);
          setIdDenuncia(response.data.id);
        } catch (error) {
          console.error("Erro ao carregar a denúncia:", error);
          if(error.response.status === 404) {
            alert("Sem denúncias atribuídas à viatura no momento");
          }
        }
    };

    useEffect(() => {
    fetchDenuncia();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setRelatorio(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log(relatorio)
            const response = await axios.put(`${apiUrl}/denuncias/${idDenuncia}/relatorio`, relatorio, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            });

            if (response.status === 200) {
                console.log('Relatório enviado com sucesso!');
                handleShow("ocorrenciaFinalizada");
            } else {
                console.error('Erro ao receber os dados');
            }
        } catch (error) {
            console.error('Erro:', error);
        }

    }

    return (
        <IonPage>
            <IonHeader>
            <IonToolbar>
                <NavbarMike />
            </IonToolbar>
            </IonHeader>
            <IonContent className="flex justify-center">
                <div className="space-y-3 text-center p-4">
                    <h2 className="text-2xl font-bold">Por favor, insira o relatório da ocorrência.</h2>
                    <form onSubmit={handleSubmit}>
                        <textarea name="relatorio" onChange={handleChange} className="bg-white rounded-lg border border-black w-full md:w-2/3 lg:w-1/2 h-20"></textarea>

                        <div className="flex justify-center">
                            <button onClick={() => history.push('/home')} className="text-center text-xl p-2 rounded-xl h-14 w-32">
                                Voltar
                            </button>
                            <button type="submit" className="text-center bg-bluemike text-xl text-white p-2 rounded-xl h-14 w-32">
                                Confirmar
                            </button> 
                        </div>
                    </form>
                </div>
                <OcorrenciaFinalizada/>
            </IonContent>
        </IonPage>
    );
}