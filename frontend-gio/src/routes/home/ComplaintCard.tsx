import { useNavigate } from "react-router-dom";

interface ComplaintCardProps {
    id: string;
    status: string;
    tipo: string;
    endereco: string;
    relato: string;
}

function ComplaintCard({ id, status, tipo, endereco, relato }: ComplaintCardProps) {
    const navigate = useNavigate();

    const handleComplaintClick = () => {

        if (status === 'EM_ABERTO') {
            navigate('/viaturas', {
                state: {
                    idDenuncia: id
                }
            })
        }else{
            navigate('/infoocorrencia',{
                state:{
                    idDenuncia:id,
                    status:status
                }
            })
        }

    }

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
        <button onClick={handleComplaintClick} className="w-full max-w-xs bg-gray-100 rounded-xl px-4 py-4 space-y-4 lg:max-w-md text-left">
            <div>
                <div className="flex gap-3 items-center">
                    <div className={getColor()}></div>
                    <h2 className="font-bold xl:text-2xl lg:text-xl md:text-lg text-base">{tipo}</h2>
                </div>
                <p className="xl:text-lg lg:text-base md:text-sm text-xs line-clamp-1 mt-2">{endereco}</p>
            </div>
            <div className="xl:text-md lg:text-base md:text-sm text-xs line-clamp-2">{relato}</div>
        </button>
    );
}

export default ComplaintCard