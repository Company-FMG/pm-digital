import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import AuthenticatedLayout from "../../layouts/AuthenticatedLayout";
import ComplaintMap from "../../routes/complaint/ComplaintMap";


interface Denuncia {
    idDenuncia: string;
    tipo: string;
    relato: string;
    referencia: string;
    local: string;
    nomeVitima: string;
    sexoVitima: string;
    idadeVitima: number;
    nomeSuspeito: string;
    sexoSuspeito: string;
    idadeSuspeito: number;
    descricaoSuspeito: string;
    status: string;
    lat: number;
    lng: number;
}

export default function InfoOcorrencia() {
    const api_url = import.meta.env.VITE_REACT_API_URL;
    const location = useLocation();
    const [denuncia, setDenuncia] = useState<Denuncia>();
    const idDenuncia = location.state?.idDenuncia;
    const status = location.state?.status;


    const getDenuncia = async () => {
        try {
            const response = await axios.get<Denuncia>(`${api_url}/denuncias/${idDenuncia}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (response.status === 200) {
                console.log('Dados recebidos com sucesso!: ', response.data);
                setDenuncia(response.data)
            } else {
                console.error('Erro ao receber os dados ou formato inesperado:', response.data);
            }
        } catch (error) {
            console.error('Erro ao buscar viaturas:', error);

        }
    };

    useEffect(() => {
        getDenuncia();
    }, []);

    const getColor = () => {
        switch (status) {
            case 'EM_ABERTO':
                return 'h-8 w-8 rounded-full bg-red'
                break;
            case 'EM_ANDAMENTO':
                return 'h-8 w-8 rounded-full bg-yellow-200'
                break;
            case 'FINALIZADA':
                return 'h-8 w-8 rounded-full bg-cyan-500'
                break;
            default:
                console.log("status inválido")
        }
    }


    return (
        <AuthenticatedLayout>
            <section>
                <div className="mx-auto space-y-6 px-8 sm:px-16 lg:px-36 xl:px-56 2xl:px-96 3xl:px-[32rem]">
                    <div className="flex flex-row gap-4 items-center">
                        <div className={getColor()}><div className="sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-12 lg:h-12"></div></div>

                        <h1 className="font-bold text-3xl md:text-3xl">{denuncia?.tipo}</h1>
                    </div>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
                            <ComplaintMap local={denuncia?.local as string} lat={denuncia?.lat as number} lng={denuncia?.lng as number} />
                            <div className="flex-col w-full font-bold">
                                <h2 className="text-xl md:text-xl 2xl:text-2xl">Informações da cena</h2>
                                <div className="flex flex-col mt-4 md:mt-11 md:text-lg space-y-5 text-justify">
                                    <p><span className="font-bold">Tipo:</span> {denuncia?.tipo}</p>
                                    <p><span className="font-bold">Relato:</span> {denuncia?.relato}</p>
                                    <p><span className="font-bold">Referência:</span> {denuncia?.referencia}</p>
                                    <p><span className="font-bold">Nome da vitima:</span> {denuncia?.nomeVitima}</p>
                                    <p><span className="font-bold">Sexo da vitima:</span> {denuncia?.sexoVitima}</p>
                                    <p><span className="font-bold">Idade da vitima:</span> {denuncia?.idadeVitima}</p>
                                    <p><span className="font-bold">Nome do suspeito:</span> {denuncia?.nomeSuspeito}</p>
                                    <p><span className="font-bold">Sexo do suspeito:</span> {denuncia?.sexoSuspeito}</p>
                                    <p><span className="font-bold">Descrição do suspeito:</span> {denuncia?.descricaoSuspeito}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>)
}