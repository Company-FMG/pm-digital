//@ts-nocheck
import { useHistory } from "react-router";
import { useModal } from "../../contexts/ModalContext";
import { useCredentials } from "../../contexts/CredentialsContext";

export default function Opcoes() {
    const { showOpcoes, handleShow } = useModal();
    const history = useHistory();
    const { nome, pfp, matricula } = useCredentials();

    if (!showOpcoes) {
        return null;
    }

    return (
        <div className="absolute top-3 right-3 border-2 border-gray-300 bg-white rounded p-5 text-center flex flex-col items-center w-80 space-y-3">
            {/*<img src={pfp.webviewPath} alt="" className="rounded-full object-cover h-14 w-14" />*/}
            <div className="relative w-16 h-16 rounded-full border-white border-4 ring-4 ring-bluemike overflow-hidden">
                <img
                    src={pfp}
                    alt="Foto de Perfil"
                    className="object-cover w-full h-full rounded-full"
                />
            </div>
            <div>
                <h2 className="text-xl font-bold text-bluemike m-0">Olá, {localStorage.getItem("nome")}!</h2>
                <p className="text-sm">Coronel {matricula}</p>
            </div>
            <div className="border-2 border-gray-300 rounded w-full">
                <button onClick={() => history.push('/perfil')} className="w-full py-3">Minha conta</button>
            </div>
            <button onClick={() => history.push("/")} className="bg-bluemike text-white w-full rounded py-3">Sair</button>
            <button className="absolute right-3 -top-1 rotate-45 text-2xl" onClick={() => handleShow("opcoes")}>+</button>
        </div>
    );
};