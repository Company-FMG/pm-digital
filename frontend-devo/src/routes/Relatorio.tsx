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
    idDenuncia: string;
}

export default function Relatorio() {
    const history = useHistory();
    const apiUrl = import.meta.env.VITE_API_URL!;
    const { handleShow } = useModal();
    const [idDenuncia, setIdDenuncia] = useState("");

    const fetchDenuncia = async () => {
        try {
          const response = await axios.get<Denuncia>(`${apiUrl}/viaturas/${localStorage.getItem("placaViatura")}/denuncia`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          });
          console.log(response.data.idDenuncia);
          setIdDenuncia(response.data.idDenuncia);
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

    const handleSubmit = async () => {
        try {
            const response = await axios.put(`${apiUrl}/denuncias/${idDenuncia}/relatorio`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            });

            if (response.status === 200) {
                console.log('Relatório enviado com sucesso!');
                history.push("/home")
            } else {
                console.error('Erro ao receber os dados');
            }
        } catch (error) {
            console.error('Erro:', error);
        }

        handleShow("ocorrenciaFinalizada");
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
                    <textarea name="" id="" className="bg-white rounded-lg border border-black w-full md:w-2/3 lg:w-1/2 h-20"></textarea>
                    <div className="flex justify-center">
                        <button onClick={() => history.push('/')} className="text-center text-xl p-2 rounded-xl h-14 w-32">
                            Voltar
                        </button>
                        <button onClick={handleSubmit} className="text-center bg-bluemike text-xl text-white p-2 rounded-xl h-14 w-32">
                            Confirmar
                        </button> 
                    </div>
                </div>
                <OcorrenciaFinalizada/>
            </IonContent>
        </IonPage>
    );
}