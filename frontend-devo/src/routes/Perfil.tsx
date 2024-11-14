import {
    IonContent,
    IonPage,
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
import InfoViatura from "../components/perfil/InfoViatura";
import { useEffect, useState } from "react";
import axios from "axios";
  

interface Policial {
  id: string;
  nome: string;
  comandante: boolean;
}
interface Denuncia {
  id: string;
}
interface Viatura {
  id: string;
  placa: string;
  policiais: Policial[];
  denuncia: Denuncia;
}

export default function Perfil() {
  defineCustomElements(window);
  const { photo, takePhoto } = usePhotoGallery();
  const history = useHistory();
  const { nome, matricula, cargo, pfp, handleChangePhoto } = useCredentials();

  const api_url = import.meta.env.VITE_API_URL;
  const [viaturas, setViaturas] = useState<Viatura[]>([]);

  const fetchViaturas = async () => {
      try {
          const response = await axios.get<Viatura[]>(`${api_url}/viaturas`, {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('authToken')}`
              }
          });

          if (response.status === 200) {
              console.log('Dados recebidos com sucesso!: ', response.data);
              setViaturas(response.data);
          } else {
              console.error('Erro ao receber os dados');
          }
      } catch (error) {
          console.error('Erro:', error);
      }
  }
  useEffect(() => {
      fetchViaturas();
  }, []);
  

  return (
    <IonPage>
      <NavbarMike />
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
              <h3 className="text-xl font-bold mb-0">{cargo} {localStorage.getItem("nome")}</h3>
              <p>#{localStorage.getItem("matricula")}</p>
            </div>
            <button onClick={() => history.push('/home') } className="bg-bluemike text-xs font-bold text-white px-8 py-3 rounded-md">
              VOLTAR PARA PÁGINA INICIAL
            </button>
          </div>
          {viaturas.filter(viatura => !viatura.denuncia && !viatura.policiais[2]).map((viatura, index) => (
                        <InfoViatura
                            key={index}
                            idViatura={viatura.id}
                            placa={viatura.placa}
                            responsavel={
                                viatura.policiais && viatura.policiais.length > 0
                                ? viatura.policiais.find(policial => policial.comandante)?.nome || "Sem comandante"
                                : "Sem comandante"
                            }
                            efetivos={
                        viatura.policiais && viatura.policiais.length > 0
                            ? viatura.policiais.map(policial => policial.nome)
                            : ["Sem efetivo"]                           
                            }
                            areaAtuacao={"Região Metropolitana"}
                        />
                    ))}
          <hr className="bg-gray-500"/>
        </div>
        <UltimaOcorrencia/>
      </IonContent>
    </IonPage>
  );
}
  