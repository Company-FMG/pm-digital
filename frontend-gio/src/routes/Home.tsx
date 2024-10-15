import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import ComplaintCard from "../components/global/ComplaintCard"
import AuthenticatedLayout from "../layouts/AuthenticatedLayout"

interface Complaint {
    id: string;
    tipo_violencia: string;
    relato: string;
    local: string;
    n_local: string;
    cep: string;
    status: string;
}

export default function Home() {
    const navigate = useNavigate();
    const [complaints, setComplaints] = useState<Complaint[]>([]);

    const fetchComplaints = async () => {
        try {
            const response = await axios.get<Complaint[]>('http://localhost:8080/denuncias');

            if (response.status === 200) {
                console.log('Dados recebidos com sucesso!: ', response.data);
                setComplaints(response.data);
            } else {
                console.error('Erro ao receber os dados');
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    useEffect(() => {
        fetchComplaints();
    }, []);

    return (
        <AuthenticatedLayout>
            <div className="grid grid-cols-2 justify-items-center px-40 gap-y-20">
                <div className="overflow-auto border-4 rounded-lg border-gray-200 px-10 py-8 space-y-8">
                    <div className="flex justify-between items-center">
                        <h3 className="font-poppins font-bold text-bluemike text-xl">Novas Denúncias</h3>
                        <button onClick={() => navigate('/newcomplaint')} className="bg-bluemike text-white h-10 w-10 text-5xl rounded-full flex items-center pb-3 justify-center">+</button>
                    </div>
                    {complaints.filter(complaint => complaint.status === "EM_ABERTO").map((complaint, index) => (
                        <ComplaintCard key={index} status={complaint.status} tipo={complaint.tipo_violencia} endereco={complaint.local} />
                    ))}
                </div>
                <div className="overflow-auto border-4 rounded-lg border-gray-200 px-10 py-8 space-y-8">
                    <h3 className="font-poppins font-bold text-bluemike text-xl">Ocorrências em andamento</h3>
                    {complaints.filter(complaint => complaint.status === "EM_ANDAMENTO").map((complaint, index) => (
                        <ComplaintCard key={index} status={complaint.status} tipo={complaint.tipo_violencia} endereco={complaint.local} />
                    ))}
                </div>
                <div className="col-span-2 overflow-auto border-4 rounded-lg border-gray-200 px-10 py-8 space-y-8">
                    <h3 className="font-poppins font-bold text-bluemike text-xl">Ocorrências finalizadas</h3>
                    <div className="grid grid-cols-2 space-x-24">
                        {complaints.filter(complaint => complaint.status === "FINALIZADA").map((complaint, index) => (
                            <ComplaintCard key={index} status={complaint.status} tipo={complaint.tipo_violencia} endereco={complaint.local} />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}