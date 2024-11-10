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
                geolocation: {lat: 0, lng: 0},  
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
    console.log(formData.geolocation.lat);
    console.log(formData.geolocation.lng);
  }, [formData.geolocation.lat, formData.geolocation.lng]);

  return (
    <AuthenticatedLayout>
      <section>
        <div className="container max-w-sm sm:max-w-lg md:max-w-xl mx-auto space-y-8 px-25 ml-16 sm:ml-24 md:ml-30 lg:px-2 lg:ml-32 xl:ml-56 lg:max-w-4xl 2xl:ml-custom">
          <div className="flex flex-row gap-4">
            <div className="bg-red w-8 h-8 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full"></div>
            <h1 className="font-bold text-3xl sm:text-3xl md:text-5xl ">{formData.tipo}</h1>
          </div>
          <div className="grid gap-8 sm:gap-2 md:gap-4 lg:gap-8 xl:gap-10 2xl:gap-12 lg:grid-cols-2 lg:items-start">
            <ComplaintMap local={formData.local} lat={formData.geolocation.lat} lng={formData.geolocation.lng}/>
            <div className="flex-col">
              <div className="grid gap-4">
                <h1 className="font-bold md:text-xl lg:text-2xl">Ocorrência N°: </h1>
                <h2 className="font-bold md:text-xl lg:text-2xl">
                  Informações da cena
                </h2>
                <p>Relato: {formData.relato}</p>
              </div>
              <div className="grid gap-4 mt-10">
                <p>Nome da vítima: {formData.nomeVitima}</p>
                <p>Sexo: {formData.sexoVitima}</p>
                <p>Idade: {formData.idadeVitima}</p>
              </div>
              <div className="grid gap-4 mt-10">
                <p>Pessoa suspeita: {formData.nomeSuspeito}</p>
                <p>Sexo: {formData.sexoSuspeito}</p>
                <p>Idade: {formData.idadeSuspeito}</p>
                <p>Descrição: {formData.descricaoSuspeito}</p>
              </div>
            </div>
          </div>
          <button onClick={handleSubmit} className="bg-bluemike flex items-center px-12 sm:px-32 md:px-32 lg:px-64 h-16 text-white sm:text-md md:text-md lg:text-xl font-bold font-poppins rounded">
            <span className="mr-2">Criar denúncia</span>
            <img src={RightArrow} className="w-12" />
          </button> 
        </div>
      </section>
    </AuthenticatedLayout>
  );
}
