import rightarrow from "../../assets/rightarrow.svg";
import { useModal } from "../../contexts/ModalContext";

export default function FooterMike() {
  const { handleShow } = useModal();

  return (
    <>
      <div className="flex flex-col gap-1 p-4 items-center justify-center rounded-t-2xl relative">
        <div className="pb-2">
          <button onClick={() => handleShow("detalhesDenuncia")} className="text-center bg-bluemike text-lg text-[#FFFFFF] p-2 rounded-md h-12 w-72">
            Dados da Ocorrência
          </button>
        </div>
        <div>
          <button onClick={() => handleShow("registrarBO")} className="bg-cinzamike text-lg text-black p-2 rounded-md h-12 w-72">
            Finalizar Ocorrência
            <img className="pl-4 inline-block" src={rightarrow} alt="" />
          </button>
        </div>
        <div>
          <button onClick={() => handleShow("sobreMike")} className="text-center text-lg text-black mt-2">Sobre o PM Digital</button>
        </div>
      </div>
    </>
  );
}