import { useEffect, useState } from "react";
import rightarrow from "../../assets/rightarrow.svg";
import { useModal } from "../../contexts/ModalContext";
import axios from "axios";
import { useDenuncia } from "../../contexts/DenunciaContext";

interface Denuncia {
  id: string;
  status: string;
}

export default function FooterMike() {
  const [denuncia, setDenuncia] = useState<Denuncia>();
  const { distance, duration } = useDenuncia();
  const apiUrl = import.meta.env.VITE_API_URL;
  const { handleShow } = useModal();

  const checkOcorrenciaAtiva = async () => {
    try {
      const response = await axios.get<Denuncia>(`${apiUrl}/viaturas/${localStorage.getItem("placaViatura")}/denuncia`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      console.log(response.data);
      setDenuncia(response.data);
    } catch (error) {
      console.error("Erro ao carregar a denúncia:", error);
    }
  }

  useEffect(() => {
    checkOcorrenciaAtiva();
  }, []);
  return (
    <>
      <footer className="flex flex-col gap-1 p-4 items-center justify-center rounded-t-2xl bg-white">
        {denuncia?.status === ('EM_ANDAMENTO') &&
          <div className="space-y-1">
            <div className="flex flex-row gap-8 justify-center pb-2 text-black">
              <h1 className="text-md">Distância: {distance}</h1>
              <h1 className="text-md">Duração: {duration}</h1>
            </div>
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
          </div>
        }
        <div>
          <button onClick={() => handleShow("sobreMike")} className="text-center text-lg text-black mt-2">Sobre o PM Digital</button>
        </div>
      </footer>

    </>
  );
}