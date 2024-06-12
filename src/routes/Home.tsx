import { useNavigate } from "react-router-dom"
import ComplaintCard from "../components/global/ComplaintCard"
import AuthenticatedLayout from "../layouts/AuthenticatedLayout"

export default function Home() {
    const navigate = useNavigate();

    return (
        <AuthenticatedLayout>
            <div className="grid grid-cols-2 justify-items-center px-40 gap-y-20">
                <div className="overflow-auto border-4 rounded-lg border-gray-200 px-10 py-8 space-y-8">
                    <div className="flex justify-between items-center">
                        <h3 className="font-poppins font-bold text-bluemike text-xl">Novas Denúncias</h3>
                        <button onClick={() => navigate('/newcomplaint')} className="bg-bluemike text-white h-10 w-10 text-5xl rounded-full flex items-center pb-3 justify-center">+</button>
                    </div>
                    <ComplaintCard status="nova" tipo="#121 - VBG" endereco="R. Patrícia de Fernandes - Espinheiro"/>
                    <ComplaintCard status="nova" tipo="#121 - VBG" endereco="R. Patrícia de Fernandes - Espinheiro"/>
                </div>
                <div className="overflow-auto border-4 rounded-lg border-gray-200 px-10 py-8 space-y-8">
                    <h3 className="font-poppins font-bold text-bluemike text-xl">Ocorrências em andamento</h3>
                    <ComplaintCard status="em andamento" tipo="#121 - VBG" endereco="R. Patrícia de Fernandes - Espinheiro"/>
                    <ComplaintCard status="em andamento" tipo="#121 - VBG" endereco="R. Patrícia de Fernandes - Espinheiro"/>
                </div>
                <div className="col-span-2 overflow-auto border-4 rounded-lg border-gray-200 px-10 py-8 space-y-8">
                    <h3 className="font-poppins font-bold text-bluemike text-xl">Ocorrências finalizadas</h3>
                    <div className="grid grid-cols-2 space-x-24">
                        <ComplaintCard status="finalizada" tipo="#121 - VBG" endereco="R. Patrícia de Fernandes - Espinheiro"/>
                        <ComplaintCard status="finalizada" tipo="#121 - VBG" endereco="R. Patrícia de Fernandes - Espinheiro"/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}