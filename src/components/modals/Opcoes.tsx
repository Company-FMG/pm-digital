import { useHistory } from "react-router";
import { useModal } from "../../contexts/ModalContext";
import { useCredentials } from "../../contexts/CredentialsContext";

export default function Opcoes(){
    const { showOpcoes, handleShow } = useModal();
    const history = useHistory();
    const { nome, pfp, matricula} = useCredentials();

    if(!showOpcoes) {
        return null;
    }

    return(
        <div className="absolute top-3 right-3 border-2 border-gray-300 bg-white rounded p-5 text-center flex flex-col items-center w-80 space-y-2">
            <img src={pfp.webviewPath} alt="" className="rounded-full object-cover h-14 w-14" />
            <div>
                <h2 className="text-xl font-bold text-bluemike m-0">Olá {nome}</h2>
                <p className="text-sm">Atendente do compom {matricula}</p>
            </div>
            <div className="border-2 border-gray-300 rounded w-full">
                <button onClick={() => history.push('/perfil')} className="w-full py-3">Minha conta</button>
            </div>
            <button onClick={() => history.push("/login")} className="bg-bluemike text-white w-full rounded py-3">Sair</button>
            <button className="absolute right-3 -top-1 rotate-45 text-2xl" onClick={() => handleShow("opcoes")}>+</button>
        </div>
    );   
};