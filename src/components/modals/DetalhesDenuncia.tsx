import { IonContent, IonPage } from "@ionic/react";
import Modal from "../global/Modal";

export default function DetalhesDenuncia() {
    const endereco = "Rua do Príncipe, 235"

    return (
        /* <Modal> */
        <IonPage>
            <div className="w-96 sm:w-[700px] max-w-7xl space-y-4 bg-white text-black rounded-md mx-auto my-auto px-6 py-4">
                <div className="flex flex-row gap-4 items-center">
                    <div className="bg-red w-8 h-8 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full"></div>
                    <h1 className="font-bold text-3xl sm:text-4xl ">#121 - VBG (2km)</h1>
                    <button className="md:ml-56 rotate-45 text-4xl">+</button>
                </div>
            </div>
        </IonPage>
    );
};