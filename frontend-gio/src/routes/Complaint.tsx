import ComplaintMap from "../components/complaint/ComplaintMap";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import { useForm } from "../contexts/ComplaintFormContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RightArrow from "../assets/RightArrow.svg";
import { useEffect } from "react";

export default function Complaint() {
    const api_url = import.meta.env.VITE_REACT_API_URL;
    const { formData, setFormData } = useForm();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${api_url}/denuncias`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (response.status === 201) {
                console.log('Dados enviados com sucesso!');

                setFormData({
                    tipo: "",
                    local: "",
                    cep: undefined,
                    relato: "",
                    referencia: "",
                    lat: 0,
                    lng: 0,
                    nomeVitima: "",
                    sexoVitima: "",
                    idadeVitima: 0,
                    nomeSuspeito: "",
                    sexoSuspeito: "",
                    idadeSuspeito: 0,
                    descricaoSuspeito: "",
                    status: "EM_ABERTO",
                });

                navigate("/home");
            } else {
                console.error('Erro ao enviar os dados');
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    useEffect(() => {
        console.log(formData.lat);
        console.log(formData.lng);
    }, [formData.lat, formData.lng]);

    return (
        <AuthenticatedLayout>
            <section>
                <div className="mx-auto space-y-6 px-8 sm:px-16 lg:px-36 xl:px-56 2xl:px-96 3xl:px-[32rem]">
                    <div className="flex flex-row gap-4 items-center">
                        <div className="bg-red w-8 h-8 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full"></div>
                        <h1 className="font-bold text-3xl md:text-3xl">{formData.tipo}</h1>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
                            <ComplaintMap local={formData.local} lat={formData.lat} lng={formData.lng} />
                            <div className="flex-col w-full font-bold">
                                <h2 className="text-xl md:text-xl 2xl:text-2xl">Informações da cena</h2>
                                <div className="flex flex-col mt-4 md:mt-11 md:text-lg space-y-5 text-justify">
                                    <p className="line-clamp-3">Relato: <span className="font-normal">{formData.relato}</span></p>
                                    <p>Nome da vítima: <span className="font-normal">{formData.nomeVitima}</span></p>
                                    <p>Sexo: <span className="font-normal">{formData.sexoVitima}</span></p>

                                    {formData.idadeVitima === 0 ? 
                                    <p>Idade: <span className="font-normal">Não informada</span></p> 
                                    : 
                                    <p>Idade: <span className="font-normal">{formData.idadeVitima}</span></p>}

                                    <p>Pessoa suspeita: <span className="font-normal">{formData.nomeSuspeito}</span></p>
                                    <p>Sexo: <span className="font-normal">{formData.sexoSuspeito}</span></p>

                                    {formData.idadeSuspeito === 0 ? 
                                    <p>Idade: <span className="font-normal">Não informada</span></p> 
                                    : 
                                    <p>Idade: <span className="font-normal">{formData.idadeSuspeito}</span></p>}

                                    <p className="line-clamp-3">Descrição: <span className="font-normal">{formData.descricaoSuspeito}</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-bluemike flex gap-4 items-center justify-center h-16 text-white sm:text-md md:text-md lg:text-xl font-bold font-poppins rounded"
                            >
                                Criar denúncia
                                <img src={RightArrow} className="w-12" alt="Ícone de seta para a direita" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}