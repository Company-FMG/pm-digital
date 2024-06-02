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
import MapMike from "../components/global/MapMike";
import MapTest from "../components/global/MapTest";
import RegistrarBO from "../components/modals/RegistrarBO";
import { useModal } from "../components/ModalContext";
import InsereRelatorio from "../components/modals/InsereRelatorio";
import OcorrenciaFinalizada from "../components/modals/OcorrenciaFinalizada";

export default function Home() {
  const { show } = useModal();

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <NavbarMike />
          </IonToolbar>
        </IonHeader>
        <IonContent className="relative">
          <MapTest />
          <div className="absolute right-14 top-32">
            {show && <AlertaOcorrenciaMike />}
          </div>
          <RegistrarBO />
          <InsereRelatorio />
          <OcorrenciaFinalizada />
          {/*  
        <MapMike/> */}
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
