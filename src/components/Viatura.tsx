import carroimg from "../assets/carro.svg";
import pinimg from "../assets/pin.svg";
import efetivoimg from "../assets/efetivoimg.svg";
import { useState } from "react";

export default function Viatura({
  idViatura,
  placa,
  responsavel,
  efetivo,
  areaAtuacao,
}) {
  const [showMore, setShowMore] = useState(false);
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
          color:showMore ? "#FFFFFF" : "#000000"
        }}
      >
        <div className="flex justify-start place-items-center  mx-auto gap-4">
          <div>
            <img src={carroimg} alt=""/>
            
          </div>
          <div>
            <p className="text-[28px]">VT#{idViatura}</p>
          </div>
          <div>
            <img src={efetivoimg} alt="" />
          </div>
          <div>
            <p>{efetivo}</p>
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
                  <b>Efetivo:</b> {efetivo}
                </p>
                <p className="pb-2 text-[20px]">
                  <b>Área de atuação:</b> {areaAtuacao}
                </p>
              </div>
              <button className="bg-white p-4 rounded-lg font-bold text-[#1A23F1] text-[20px] ml-auto self-end">
                Atribuir Ocorrencia
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
