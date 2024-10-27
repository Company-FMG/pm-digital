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
        <div className="w-full max-w-xs bg-gray-100 rounded-xl px-4 py-4 space-y-4 lg:max-w-md">
            <div>
            <div className="flex gap-3">
                <div className={getColor()}></div>
                <h2 className="font-bold xl:text-2xl lg:text-xl md:text-lg text-base">{tipo}</h2>
            </div>
            <p className="xl:text-lg lg:text-base md:text-sm text-xs">{endereco}</p>
            </div>
            <div className="h-6 xl:h-8 lg:h-7 md:h-8 w-full xl:w-80 lg:w-60 bg-gray-300 rounded-lg"></div>
            <div className="h-6 xl:h-8 lg:h-7 md:h-8 w-3/4 xl:w-60 lg:w-40 bg-gray-300 rounded-lg"></div>
        </div>
    );
}

export default ComplaintCard