import rightarrow from "../../assets/rightarrow.svg";
import { useModal } from "../ModalContext";

export default function FooterMike() {
  const { handleShow } = useModal();

  return (
    <>
      <div className="flex flex-col gap-2 p-8 items-center justify-center rounded-t-2xl relative">
        <div className="pb-2">
          <button className="text-center bg-bluemike text-xl text-[#FFFFFF] p-2 rounded-xl h-14 w-72">
            Dados da Ocorrência
          </button>
        </div>
        <div>
          <button onClick={handleShow} className="bg-cinzamike text-xl text-black p-2 rounded-xl h-14 w-72">
            Finalizar Ocorrência
            <img className="pl-4 inline-block" src={rightarrow} alt="" />
          </button>
        </div>
        <div>
          <h1 className="text-center text-xl text-black mt-2">Sobre o Mike</h1>
        </div>
        <div>
          <button onClick={handleShow}>TESTE MODAL</button>
        </div>
      </div>
    </>
  );
}