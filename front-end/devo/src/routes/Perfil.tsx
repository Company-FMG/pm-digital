import {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon,
} from "@ionic/react";
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { pencilSharp } from 'ionicons/icons';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import NavbarMike from "../components/global/NavbarMike";
import { useHistory } from "react-router";
import { useCredentials } from "../contexts/CredentialsContext";
import UltimaOcorrencia from "../components/global/UltimaOcorrencia";
  
  export default function Perfil() {
    defineCustomElements(window);
    const { photo, takePhoto } = usePhotoGallery();
    const history = useHistory();
    const { nome, matricula, cargo, pfp, handleChangePhoto } = useCredentials();

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <NavbarMike />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="space-y-12 px-5">
            <div className="pt-10 text-center space-y-5">
              <div className="relative inline-block">
                <img className="w-28 h-28 object-cover max-w-28 md:w-36 lg:w-64 rounded-full ring-2 md:ring-4 ring-white ring-offset-4 ring-offset-bluemike" src={photo.webviewPath}  alt="profile"/>
                <IonFab vertical="bottom" horizontal="start" slot="fixed" className="absolute -bottom-4 left-20">
                  <IonFabButton onClick={() => { takePhoto(); handleChangePhoto(photo.webviewPath) }}>
                    <IonIcon icon={pencilSharp}></IonIcon>
                  </IonFabButton>
                </IonFab>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-0">{cargo} {nome}</h3>
                <p>{matricula}</p>
              </div>
              <button onClick={() => history.push('/home') } className="bg-bluemike text-xs font-bold text-white px-8 py-3 rounded-md">
                VOLTAR PARA PÁGINA INICIAL
              </button>
            </div>
            <hr className="bg-gray-500"/>
          </div>
          <UltimaOcorrencia/>
        </IonContent>
      </IonPage>
    );
  }
  