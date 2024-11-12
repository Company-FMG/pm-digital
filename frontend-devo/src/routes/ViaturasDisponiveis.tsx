import { IonPage, IonHeader, IonToolbar, IonContent } from "@ionic/react";
import NavbarMike from "../components/global/NavbarMike";
import InfoViatura from "../components/perfil/InfoViatura";
import Viatura from "../components/global/Viatura";

export default function ViaturasDisponiveis() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <NavbarMike />
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="flex flex-col items-center font-poppins space-y-4 p-4">
                    <p className="text-lg my-4 text-bluemike font-medium">Viaturas disponíveis</p>
                    <Viatura />
                    <Viatura />
                </div>
            </IonContent>
        </IonPage>
    )
}