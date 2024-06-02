import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFooter,
} from "@ionic/react";
import NavbarMike from "../components/global/NavbarMike";
import FooterMike from "../components/global/FooterMike";
import AlertaOcorrenciaMike from "../components/modals/AlertaOcorrenciaMike"
import MapMike from "../components/global/MapMike";
import RegistrarBO from "../components/modals/RegistrarBO";

export default function Home() {
  return (
    <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <NavbarMike />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="relative">
        <RegistrarBO />
        <AlertaOcorrenciaMike/>
        <MapMike/>
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
