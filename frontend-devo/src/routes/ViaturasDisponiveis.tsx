import { IonPage, IonHeader, IonToolbar, IonContent } from "@ionic/react";
import NavbarMike from "../components/global/NavbarMike";
import InfoViatura from "../components/perfil/InfoViatura";
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
interface Viatura {
    id: string;
    placa: string;
    policiais: Policial[];
    denuncia: Denuncia;
}

export default function ViaturasDisponiveis() {
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
            <IonHeader>
                <IonToolbar>
                    <NavbarMike />
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="flex flex-col items-center font-poppins space-y-4 p-4">
                    <p className="text-lg my-4 text-bluemike font-medium">Viaturas disponíveis</p>
                    {viaturas.filter(viatura => !viatura.denuncia).map((viatura, index) => (
                        <Viatura
                            key={index}
                            idViatura={viatura.id}
                            placa={viatura.placa}
                            responsavel={
                                viatura.policiais?.find(policial => policial.comandante === true)?.nome || "Sem comandante"
                            }
                            efetivos={viatura.policiais ? viatura.policiais.map((policial) => `${policial.nome}, `) : ["Sem efetivo"]}
                            areaAtuacao={"Região Metropolitana"}
                        />
                    ))}
                </div>
            </IonContent>
        </IonPage>
    );
}
