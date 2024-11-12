//import carroimg from "../assets/carro.svg";
import pinimg from "../assets/pin.svg";
import efetivoimg from "../assets/efetivoimg.svg";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function Viatura({
  idViatura,
  placa,
  responsavel,
  efetivos,
  areaAtuacao,
}: {
  idViatura: string,
  placa: string,
  responsavel: string,
  efetivos: string[],
  areaAtuacao: string
}) {
  const api_url = import.meta.env.VITE_REACT_API_URL;
  const location = useLocation();
  const idDenuncia = location.state?.idDenuncia;
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const setViatura = async () => {
    try {
      const response = await axios.put(`${api_url}/denuncias/${idDenuncia}/${idViatura}`, {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        }
      });

      if (response.status === 200) {
        console.log('Dados enviados com sucesso!');
        navigate('/home');
      } else {
        console.error('Erro ao receber os dados');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <>
      <div
        onClick={handleMoreClick}
        className="grid-cols-1 p-6 rounded-lg mb-6 cursor-pointer"
        style={{
          backgroundColor: showMore ? "#1A23F1 " : "#D9D9D9",
          color: showMore ? "#FFFFFF" : "#000000"
        }}
      >
        <div className="flex justify-start place-items-center  mx-auto gap-4">
          <div>
            <svg className="w-[33px] h-[31px] fill-white" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path style={{fill:showMore?"white":"black"}} fillRule="evenodd" clipRule="evenodd" d="M13.9859 0.223511V2.83221H19.0563V0.223511L22.0986 0.310467C25.1831 0.440902 25.1831 0.440902 25.3099 1.74525C25.3944 2.52786 25.9859 3.48438 26.7042 4.13655C27.5493 4.91916 28.3099 6.4409 29.2817 9.35394C30.0845 11.6148 31.2254 14.1366 31.8592 14.8757C33 16.3105 33 16.3974 33 22.4844C33 27.7887 32.8732 28.8322 32.2394 29.4844C31.8592 29.9192 31.0563 30.2235 30.4648 30.2235C29.8732 30.2235 29.0704 29.8757 28.6479 29.4409C28.2253 29.0496 27.8873 28.18 27.9296 26.3105H5.11268V27.4844C5.11268 28.18 4.77465 29.0496 4.35211 29.4844C3.97183 29.9192 3.16901 30.2235 2.57746 30.2235C1.98592 30.2235 1.1831 29.8757 0.760563 29.4409C0.126761 28.7887 0 27.8757 0 22.6148C0 16.6148 0.0422536 16.4844 1.1831 14.9626C1.8169 14.1366 3.04225 11.4844 3.84507 9.13655C4.94366 6.00612 5.61972 4.61482 6.50704 3.96264C7.30986 3.31047 7.64789 2.70177 7.60563 1.91916C7.56338 1.31047 7.64789 0.658293 7.85916 0.527859C8.07042 0.353946 9.50704 0.223511 13.9859 0.223511ZM6.80282 9.00612C6.33803 10.5279 5.95775 11.8322 5.95775 11.9626C5.95775 12.0931 10.6901 12.18 16.5211 12.18C22.3099 12.18 27.0845 12.0931 27.0845 11.9626C27.0845 11.8322 26.7042 10.5279 26.2394 9.00612C25.6056 6.96264 25.1408 6.22351 24.338 5.87568C23.7465 5.61481 20.1972 5.4409 16.3944 5.48438C12.6338 5.48438 9.12676 5.65829 8.57747 5.91916C7.94366 6.18003 7.39437 7.09308 6.80282 9.00612ZM3.92958 19.5713C4.14085 19.9192 4.64789 20.3974 5.11268 20.6583C5.78873 21.0061 6.12676 20.9192 6.80282 20.2235C7.56338 19.4409 7.56338 19.2235 7.05634 18.3539C6.76056 17.8322 6.21127 17.3539 5.87324 17.267C5.53521 17.2235 4.90141 17.5279 4.43662 18.0496C3.92958 18.5713 3.76056 19.18 3.92958 19.5713ZM11.9577 19.1366C12.3803 19.6583 13.3944 19.8322 16.5211 19.8322C19.6479 19.8322 20.662 19.6583 21.0423 19.1366C21.4648 18.6148 21.4648 18.3539 21.0423 17.8322C20.662 17.267 19.6479 17.1366 16.4789 17.18C13.3521 17.18 12.2958 17.3539 11.9155 17.8322C11.5775 18.3105 11.5775 18.6583 11.9577 19.1366ZM25.4789 19.5713C25.6901 19.9192 26.1972 20.3974 26.662 20.6583C27.338 21.0061 27.6761 20.9192 28.3521 20.2235C29.1127 19.4409 29.1127 19.2235 28.6056 18.3539C28.3099 17.8322 27.7606 17.3539 27.4225 17.267C27.0845 17.2235 26.4507 17.5279 25.9859 18.0496C25.4789 18.5713 25.3099 19.18 25.4789 19.5713Z" />
            </svg>
          </div>
          <div>
            <p className="text-[28px]">VT#{idViatura}</p>
          </div>
          <div>
            <img src={efetivoimg} alt="" />
          </div>
          <div>
            {efetivos.map((efetivo, index) => {
              return (
                <p key={index}>{efetivo}</p>
              )
            })}
          </div>

          <div className="flex justify-start place-items-center ml-auto gap-2">
            <div>
              <img src={pinimg} alt="" />
            </div>
            <p className="">2km (Aprox. 5 min)</p>
          </div>
        </div>
        <div>
          {showMore && (
            <div className="flex justify-start place-items-center gap-4 pt-2">
              <div>
                <p className="pb-2 text-[20px]">
                  <b>Placa: </b>
                  {placa}
                </p>
                <p className="pb-2 text-[20px]">
                  <b>Responsavel:</b> {responsavel}
                </p>
                <p className="pb-2 text-[20px]">
                  <b>Efetivo:</b> 
                  {efetivos.map((efetivo, index) => {
                    return (
                      <p key={index}>{efetivo}</p>
                    )
                  })}
                </p>
                <p className="pb-2 text-[20px]">
                  <b>Área de atuação:</b> {areaAtuacao}
                </p>
              </div>
              <button onClick={setViatura} className="bg-white p-4 rounded-lg font-bold text-[#1A23F1] text-[20px] ml-auto self-end">
                Atribuir Ocorrencia
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
