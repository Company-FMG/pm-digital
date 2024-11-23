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
import { Link } from "react-router-dom";

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
  const [placaViatura, setPlacaViatura] = useState<string | null>(localStorage.getItem('placaViatura'));
  const [isLoading, setIsLoading] = useState(true);

 const fetchViaturas = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchViaturas();
  }, []);

  useEffect(() => {
    const placa = localStorage.getItem('placaViatura');
    if (placa) {
      setPlacaViatura(placa);
    }
  }, []);

  // 2. Escuta mudanças no localStorage para atualizar o estado de placaViatura
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedPlacaViatura = localStorage.getItem('placaViatura');
      if (updatedPlacaViatura !== placaViatura) {
        setPlacaViatura(updatedPlacaViatura);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [placaViatura]);

  // 3. Atualiza as viaturas sempre que a placa da viatura mudar
  useEffect(() => {
    if (placaViatura) {
      fetchViaturas();
    }
  }, [placaViatura]); //


  const viaturaAtiva = Array.isArray(viaturas)
  ? viaturas.find(viatura => viatura.placa === placaViatura)
  : undefined;

  return (
    <IonPage>
      <NavbarMike />
      <IonContent>
        <div className="space-y-10 px-5">
          <div className="pt-10 text-center space-y-5">
            <div className="relative inline-block">
              <img className="w-28 h-28 object-cover max-w-28 md:w-36 lg:w-64 rounded-full ring-2 md:ring-4 ring-white ring-offset-4 ring-offset-bluemike" src={photo.webviewPath} alt="profile" />
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
            <button onClick={() => history.push('/home')} className="bg-bluemike text-xs font-bold text-white px-8 py-3 rounded-md">
              VOLTAR PARA PÁGINA INICIAL
            </button>
          </div>


          {isLoading ? (
            <div className="flex flex-col md:flex-row gap-6 animate-pulse items-center w-full bg-gray-300 rounded-sm p-7 justify-between">
              <div className="flex w-full flex-row gap-4 items-center">
                <div className="w-14 h-12 rounded-xl bg-gray-400"></div>
                <div className="w-full md:w-52 bg-gray-400 h-6"></div>
              </div>
              <div className="w-full md:w-44 md:h-12 bg-gray-400 p-5 rounded-md"></div>
            </div>) :
            viaturaAtiva ? (
              <InfoViatura
                idViatura={viaturaAtiva.id}
                placa={viaturaAtiva.placa}
                responsavel={
                  viaturaAtiva.policiais && viaturaAtiva.policiais.length > 0
                    ? viaturaAtiva.policiais.find(policial => policial.comandante)?.nome || "Sem comandante"
                    : "Sem comandante"
                }
                efetivos={
                  viaturaAtiva.policiais && viaturaAtiva.policiais.length > 0
                    ? viaturaAtiva.policiais.map(policial => policial.nome)
                    : ["Sem efetivo"]
                }
                areaAtuacao={"Região Metropolitana"}
              />
            ) : (
              <div className="flex flex-col gap-6 md:flex-row items-center outline outline-2 outline-bluemike w-full p-6 rounded-sm justify-between">
                <div className="flex flex-row gap-4 text-left items-center w-full">
                  <svg className="fill-bluemike w-12" viewBox="0 0 33 31" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9859 0.223511V2.83221H19.0563V0.223511L22.0986 0.310467C25.1831 0.440902 25.1831 0.440902 25.3099 1.74525C25.3944 2.52786 25.9859 3.48438 26.7042 4.13655C27.5493 4.91916 28.3099 6.4409 29.2817 9.35394C30.0845 11.6148 31.2254 14.1366 31.8592 14.8757C33 16.3105 33 16.3974 33 22.4844C33 27.7887 32.8732 28.8322 32.2394 29.4844C31.8592 29.9192 31.0563 30.2235 30.4648 30.2235C29.8732 30.2235 29.0704 29.8757 28.6479 29.4409C28.2253 29.0496 27.8873 28.18 27.9296 26.3105H5.11268V27.4844C5.11268 28.18 4.77465 29.0496 4.35211 29.4844C3.97183 29.9192 3.16901 30.2235 2.57746 30.2235C1.98592 30.2235 1.1831 29.8757 0.760563 29.4409C0.126761 28.7887 0 27.8757 0 22.6148C0 16.6148 0.0422536 16.4844 1.1831 14.9626C1.8169 14.1366 3.04225 11.4844 3.84507 9.13655C4.94366 6.00612 5.61972 4.61482 6.50704 3.96264C7.30986 3.31047 7.64789 2.70177 7.60563 1.91916C7.56338 1.31047 7.64789 0.658293 7.85916 0.527859C8.07042 0.353946 9.50704 0.223511 13.9859 0.223511ZM6.80282 9.00612C6.33803 10.5279 5.95775 11.8322 5.95775 11.9626C5.95775 12.0931 10.6901 12.18 16.5211 12.18C22.3099 12.18 27.0845 12.0931 27.0845 11.9626C27.0845 11.8322 26.7042 10.5279 26.2394 9.00612C25.6056 6.96264 25.1408 6.22351 24.338 5.87568C23.7465 5.61481 20.1972 5.4409 16.3944 5.48438C12.6338 5.48438 9.12676 5.65829 8.57747 5.91916C7.94366 6.18003 7.39437 7.09308 6.80282 9.00612ZM3.92958 19.5713C4.14085 19.9192 4.64789 20.3974 5.11268 20.6583C5.78873 21.0061 6.12676 20.9192 6.80282 20.2235C7.56338 19.4409 7.56338 19.2235 7.05634 18.3539C6.76056 17.8322 6.21127 17.3539 5.87324 17.267C5.53521 17.2235 4.90141 17.5279 4.43662 18.0496C3.92958 18.5713 3.76056 19.18 3.92958 19.5713ZM11.9577 19.1366C12.3803 19.6583 13.3944 19.8322 16.5211 19.8322C19.6479 19.8322 20.662 19.6583 21.0423 19.1366C21.4648 18.6148 21.4648 18.3539 21.0423 17.8322C20.662 17.267 19.6479 17.1366 16.4789 17.18C13.3521 17.18 12.2958 17.3539 11.9155 17.8322C11.5775 18.3105 11.5775 18.6583 11.9577 19.1366ZM25.4789 19.5713C25.6901 19.9192 26.1972 20.3974 26.662 20.6583C27.338 21.0061 27.6761 20.9192 28.3521 20.2235C29.1127 19.4409 29.1127 19.2235 28.6056 18.3539C28.3099 17.8322 27.7606 17.3539 27.4225 17.267C27.0845 17.2235 26.4507 17.5279 25.9859 18.0496C25.4789 18.5713 25.3099 19.18 25.4789 19.5713Z" />
                  </svg>
                  <p className="text-bluemike font-poppins text-md">Sem viatura no momento</p>
                </div>
                <Link to={"/viaturas-disponiveis"} className="bg-bluemike w-full text-center p-4 rounded-md text-white font-poppins">
                  Entrar em viatura
                </Link>
              </div>
            )}

          <hr className="bg-gray-500" />
        </div>
        <UltimaOcorrencia />
      </IonContent>
    </IonPage>
  );
}
