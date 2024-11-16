import { useEffect, useState } from "react";
import Viatura from "../components/Viatura";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import axios from "axios";

interface Policial {
  id: string;
  nome: string;
  comandante: boolean;
}
interface Denuncia {
  id: string;
}
interface Viatura {
  id: string;
  placa: string;
  policiais: Policial[];
  denuncia: Denuncia | null;
}

export default function ComplaintViaturaCirculacao() {
  const api_url = import.meta.env.VITE_REACT_API_URL;
  const [viaturas, setViaturas] = useState<Viatura[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchViaturas = async () => {
    try {
      const response = await axios.get<Viatura[]>(`${api_url}/viaturas`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });

      if (response.status === 200 && Array.isArray(response.data)) {
        console.log('Dados recebidos com sucesso!: ', response.data);
        setViaturas(response.data);
      } else {
        console.error('Erro ao receber os dados ou formato inesperado:', response.data);
        setError('Erro ao carregar as viaturas. Tente novamente mais tarde.');
      }
    } catch (error) {
      console.error('Erro ao buscar viaturas:', error);
      setError('Erro ao carregar as viaturas. Verifique sua conexão e tente novamente.');
    }
  };

  useEffect(() => {
    fetchViaturas();
  }, []);

  return (
    <AuthenticatedLayout>
      <div className="md:48px lg:px-24 px-12 py-2">
        <h1 className="font-bold text-4xl text-center">Viaturas em Circulação</h1>
        <div className="pt-6">
          {error ? (
            <p className="text-red-500 font-bold">{error}</p>
          ) : (
            Array.isArray(viaturas) &&
            viaturas
            .filter(viatura => !viatura.denuncia)
            .map((viatura, index) => (
              <Viatura
                key={index}
                idViatura={viatura.id}
                placa={viatura.placa}
                responsavel={
                  viatura.policiais?.find(policial => policial.comandante)?.nome || "Sem comandante"
                }
                efetivos={
                  viatura.policiais && viatura.policiais.length > 0
                      ? viatura.policiais.map(policial => policial.nome)
                      : ["Sem efetivo"]                           
                      }
                areaAtuacao={"Região Metropolitana"}
              />
            ))
          
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
