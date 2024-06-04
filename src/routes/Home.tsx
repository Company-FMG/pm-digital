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
import SobreMike from "../components/modals/SobreMike";
import { useModal } from "../contexts/ModalContext";
import ReactMap from "../components/global/ReactMap";
import DetalhesDenuncia from "../components/modals/DetalhesDenuncia";
import Opcoes from "../components/modals/Opcoes";

export default function Home() {
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <NavbarMike />
          </IonToolbar>
        </IonHeader>
        <IonContent slot="fixed" className="[my-react-map] relative">
          <ReactMap  />
          <Opcoes data-testid="my-opcoes" />
          <AlertaOcorrenciaMike />
          <RegistrarBO />
          <DetalhesDenuncia />
          <SobreMike />
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
