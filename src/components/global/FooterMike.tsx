import { useContext, useState } from "react";
import rightarrow from "../../assets/rightarrow.svg";
import { ModalContext } from "../ModalContext";
import { IonAlert, IonButton } from "@ionic/react";
import RegistrarBO from "../modals/RegistrarBO";

export default function FooterMike() {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error("ControlComponent must be used within a StateProvider");
  }
  const { handleShow } = modalContext;

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