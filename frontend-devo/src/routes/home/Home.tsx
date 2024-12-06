import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonFooter,
} from "@ionic/react";
import NavbarMike from "../../components/global/NavbarMike";
import FooterMike from "../../components/global/FooterMike";
import AlertaOcorrenciaMike from "../../components/modals/AlertaOcorrenciaMike";
import RegistrarBO from "../../components/modals/RegistrarBO";
import SobreMike from "../../components/modals/SobreMike";
import DetalhesDenuncia from "../../components/modals/DetalhesDenuncia";
import Opcoes from "../../components/modals/Opcoes";
import LiveMapTest from "./LiveMapTest";

export default function Home() {
  return (
    <>
      <IonPage>
        <NavbarMike />
        <IonContent slot="fixed" className="[my-react-map] relative">
          {/*<ReactMap />*/}
          <LiveMapTest />
          <Opcoes data-testid="my-opcoes" />
          <AlertaOcorrenciaMike />
          <RegistrarBO />
          <DetalhesDenuncia />
          <SobreMike />
          <div className="fixed bottom-0 left-0 w-full z-10">
            <FooterMike />
          </div>
        </IonContent>
      </IonPage>
    </>
  );
}
