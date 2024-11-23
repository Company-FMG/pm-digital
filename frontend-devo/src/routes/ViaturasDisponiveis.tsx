import { IonPage, IonHeader, IonToolbar, IonContent } from "@ionic/react";
import NavbarMike from "../components/global/NavbarMike";
import Viatura from "../components/global/Viatura";
import { useState, useEffect } from "react";
import axios from "axios";

interface Policial {
  id: string;
  nome: string;
  comandante: boolean;
}
interface Denuncia {
  id: string;
}
interface ViaturaData {
  id: string;
  placa: string;
  policiais: Policial[];
  denuncia: Denuncia;
}

export default function ViaturasDisponiveis() {
  const api_url = import.meta.env.VITE_API_URL;
  const [viaturas, setViaturas] = useState<ViaturaData[]>([]);

  const fetchViaturas = async () => {
    try {
      const response = await axios.get<ViaturaData[]>(`${api_url}/viaturas`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });

      if (response.status === 200 && Array.isArray(response.data)) {
        console.log("Dados recebidos com sucesso!: ", response.data);
        setViaturas(response.data);
      } else {
        console.error("Resposta inválida da API:", response.data);
        setViaturas([]); // Define um array vazio em caso de resposta inválida
      }
    } catch (error) {
      console.error("Erro ao buscar viaturas:", error);
      setViaturas([]); // Define um array vazio em caso de erro
    }
  };

  useEffect(() => {
    fetchViaturas();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <NavbarMike />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="flex flex-col items-center font-poppins space-y-4 p-4">
          <p className="text-lg my-4 text-bluemike font-medium">
            Viaturas disponíveis
          </p>
          {Array.isArray(viaturas) && viaturas.length > 0 ? (
            viaturas
              .filter(
                (viatura) => !viatura.denuncia && !viatura.policiais[2]
              )
              .map((viatura, index) => (
                <Viatura
                  key={index}
                  idViatura={viatura.id}
                  placa={viatura.placa}
                  responsavel={
                    viatura.policiais && viatura.policiais.length > 0
                      ? viatura.policiais.find(
                          (policial) => policial.comandante
                        )?.nome || "Sem comandante"
                      : "Sem comandante"
                  }
                  efetivos={
                    viatura.policiais && viatura.policiais.length > 0
                      ? viatura.policiais.map((policial) => policial.nome)
                      : ["Sem efetivo"]
                  }
                  areaAtuacao={"Região Metropolitana"}
                />
              ))
          ) : (
            <p className="text-gray-500">Nenhuma viatura disponível no momento.</p>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
}
