import { useEffect, useState } from "react";
import Modal from "../global/Modal";
import axios from "axios";
import { useModal } from "../ModalContext";

export default function ModalTesteOcorrencia() {
  const { handleEndereco } = useModal();
  const [denuncias, setDenuncias] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/denuncias")
      .then((response) => {
        setDenuncias(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);
  return (
    <Modal>
      <div className="w-screen">
        <h1>Endereço Ocorrências</h1>
        <div>
          <ul>
            {denuncias.map((denuncia : any) => (

              <li key={denuncia.id}>{denuncia.endereco} <button onClick={() => {handleEndereco(denuncia.endereco)}}  className="bg-red">Enviar rota</button></li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}
