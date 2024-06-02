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
import { useContext } from "react";
import { StateContext } from "../components/CreateContext";

export default function Home() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("ControlComponent must be used within a StateProvider");
  }
  const { isModalOpen } = context;
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <NavbarMike />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="relative">
            <MapTest />
            <div className="absolute right-14 top-32">
              {isModalOpen && <AlertaOcorrenciaMike />}
            </div>
          </div>
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
