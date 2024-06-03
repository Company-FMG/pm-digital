import {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonFooter,
} from "@ionic/react";
import NavbarMike from "../components/global/NavbarMike";
import { useHistory } from "react-router-dom";
import { useModal } from "../components/ModalContext";
import OcorrenciaFinalizada from "../components/modals/OcorrenciaFinalizada";

export default function Relatorio() {
    const history = useHistory();
    const { handleShow } = useModal();

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
                        <button onClick={() => handleShow("ocorrenciaFinalizada")} className="text-center bg-bluemike text-xl text-white p-2 rounded-xl h-14 w-32">
                            Confirmar
                        </button> 
                    </div>
                </div>
                <OcorrenciaFinalizada/>
            </IonContent>
        </IonPage>
    );
}