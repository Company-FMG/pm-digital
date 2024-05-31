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

export default function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <NavbarMike />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <AlertaOcorrenciaMike/>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <FooterMike />
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
}
