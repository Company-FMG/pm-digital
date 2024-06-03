import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonFooter,
} from "@ionic/react";
import NavbarMike from "../components/global/NavbarMike";
import FooterMike from "../components/global/FooterMike";
import AlertaOcorrenciaMike from "../components/modals/AlertaOcorrenciaMike";
import RegistrarBO from "../components/modals/RegistrarBO";
import { useModal } from "../components/ModalContext";
import ReactMap from "../components/global/ReactMap";
import DetalhesDenuncia from "../components/modals/DetalhesDenuncia";

export default function Home() {
  const { showAlertaOcorrencia } = useModal();

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <NavbarMike />
          </IonToolbar>
        </IonHeader>
        <IonContent slot="fixed" className="relative">
          <ReactMap />
          <AlertaOcorrenciaMike />
          <RegistrarBO />
          <DetalhesDenuncia />
        </IonContent>
        <IonFooter>
          <IonToolbar>
            <FooterMike />
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </>
  );
}
