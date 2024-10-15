interface ComplaintCardProps{
    status: string;
    tipo: string;
    endereco: string;
}

function ComplaintCard({ status, tipo, endereco }: ComplaintCardProps){
    const getColor = () => {
        switch(status){
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

    return(
        <div className="w-96 bg-gray-100 rounded-xl px-6 py-4 space-y-4">
            <div>
                <div className="flex gap-3">
                    <div className={getColor()}></div>
                    <h2 className="font-bold text-2xl">{ tipo }</h2>
                </div>
                <p>{ endereco }</p>
            </div>
            <div className="h-8 w-80 bg-gray-300 rounded-lg"></div>
            <div className="h-8 w-60 bg-gray-300 rounded-lg"></div>
        </div>
    );
}

export default ComplaintCard