import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ComplaintCard from "./ComplaintCard";
import AuthenticatedLayout from "../../layouts/AuthenticatedLayout";

interface Complaint {
    idDenuncia: string;
    tipo: string;
    relato: string;
    local: string;
    cep: string;
    status: string;
}

export default function Home() {
    const api_url = import.meta.env.VITE_REACT_API_URL;
    const navigate = useNavigate();
    const [complaints, setComplaints] = useState<Complaint[]>([]);

    const fetchComplaints = async () => {
        try {
            const response = await axios.get<Complaint[]>(`${api_url}/denuncias`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                }
            });

            if (response.status === 200 && Array.isArray(response.data)) {
                console.log('Dados recebidos com sucesso!: ', response.data);
                setComplaints(response.data);
            } else {
                console.error('Erro ao receber os dados ou o dado não é um array');
                setComplaints([]); // Garante que o estado seja um array vazio
            }
        } catch (error) {
            console.error('Erro:', error);
            setComplaints([]); // Garante um array vazio em caso de erro
        }
    };

    useEffect(() => {
        fetchComplaints();
    }, []);

    return (
        <AuthenticatedLayout>
            <div className="flex justify-center">
                <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center xl:max-w-5xl gap-8 lg:max-w-3xl md:max-w-lg max-w-xs">
                    <div className="overflow-auto border-4 rounded-lg border-gray-200 px-8 py-6 space-y-8 w-full">
                        <div className="flex justify-between items-center">
                            <h3 className="font-poppins font-bold text-bluemike text-lg">Novas Denúncias</h3>
                            <button onClick={() => navigate('/newcomplaint')} className="bg-bluemike text-white font-medium h-8 w-8 text-3xl rounded-full flex items-center pb-2 justify-center">+</button>
                        </div>
                        <div className="overflow-y-auto flex flex-col gap-4 h-96 pr-2">
                            {Array.isArray(complaints) && complaints.filter(complaint => complaint.status === "EM_ABERTO").map((complaint, index) => (
                                <ComplaintCard key={index} id={complaint.idDenuncia} status={complaint.status} tipo={complaint.tipo} endereco={complaint.local} relato={complaint.relato} />
                            ))}
                        </div>
                    </div>
                    <div className="overflow-auto border-4 rounded-lg border-gray-200 px-8 py-6 space-y-8 w-full">
                        <h3 className="font-poppins font-bold text-bluemike text-lg">Ocorrências em andamento</h3>
                        <div className="overflow-y-auto flex flex-col gap-4 h-96 pr-2">
                            {Array.isArray(complaints) && complaints.filter(complaint => complaint.status === "EM_ANDAMENTO").map((complaint, index) => (
                                <ComplaintCard key={index} id={complaint.idDenuncia} status={complaint.status} tipo={complaint.tipo} endereco={complaint.local} relato={complaint.relato} />
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-2 col-span-1 overflow-auto border-4 rounded-lg border-gray-200 px-8 py-6 space-y-8 w-full">
                        <h3 className="font-poppins font-bold text-bluemike text-lg">Ocorrências finalizadas</h3>
                        <div className="grid lg:grid-cols-2 gap-4 overflow-y-auto h-64 pr-2">
                            {Array.isArray(complaints) && complaints.filter(complaint => complaint.status === "FINALIZADA").map((complaint, index) => (
                                <ComplaintCard key={index} id={complaint.idDenuncia} status={complaint.status} tipo={complaint.tipo} endereco={complaint.local} relato={complaint.relato} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
