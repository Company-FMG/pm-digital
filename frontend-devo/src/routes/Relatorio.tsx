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

export default function Relatorio() {
    const history = useHistory();
    const { handleShow } = useModal();

    const handleSubmit = () => {
        try {
            const response = await axios.put(`${api_url}/policiais/in/${idViatura}`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            });

            if (response.status === 200) {
                console.log('Entrou na viatura com sucesso!');
                history.push("/perfil")
                localStorage.setItem("placaViatura", placa)
                window.dispatchEvent(new Event('storage')); 
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