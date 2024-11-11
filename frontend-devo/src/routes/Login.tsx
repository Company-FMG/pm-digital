import { useState } from "react";
import PublicSafety from "../assets/Public Safety.svg";
import Secure from "../assets/Secure.svg";
import { IonContent, IonInput, IonInputPasswordToggle, IonPage } from "@ionic/react";
import { useHistory } from "react-router-dom";
import PmDigitalComSlogan from '../assets/PM Digital com Slogan.svg';
import axios from "axios";


export default function Login() {
  const apiUrl = import.meta.env.VITE_API_URL!;
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/policiais/login`, {matricula, senha}, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
          console.log('Dados recebidos com sucesso!: ', response.data);

          localStorage.setItem('authToken', response.data.jwt);
          localStorage.setItem('nome', response.data.nome);
          history.push('/home');
      } else if(response.status === 401) {
          alert('Usuário ou senha inválidos');
      } else {
          alert('Erro ao receber os dados: ' + response.status);
      }
    } catch (error: any) {
      if(error.response.status === 403) {
        alert('Usuário ou senha inválidos');
      }
    }
  };

  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col w-full justify-center bg-bluemike h-full px-12 sm:px-10 md:px-20 lg:px-32 xl:px-44">
          <div className="mx-auto my-auto py-10 space-y-8 max-w-md sm:max-w-lg lg:max-w-2xl">
            <img
              loading="lazy"
              src={PmDigitalComSlogan}
              className="self-center w-full mb-16"
            />

            <form onSubmit={handleLogin}>
              <div className="flex gap-2 mt-8 sm:mt-10 text-lg sm:text-xl text-white items-center">
                <img
                  loading="lazy"
                  srcSet={PublicSafety}
                  className="shrink-0 w-8 sm:w-9 aspect-square"
                />
                <IonInput
                  color="light"
                  type="text"
                  className="italic white border-none p-2"
                  placeholder="Matrícula"
                  value={matricula}
                  onIonChange={(e) => setMatricula(e.target.value?.toString() || '')}
                />
              </div>

              <div className="flex gap-2 mt-10 sm:mt-12 text-lg sm:text-xl text-white items-center">
                <img
                  loading="lazy"
                  srcSet={Secure}
                  className="shrink-0 w-8 sm:w-9 aspect-square"
                />
                <IonInput
                  color="light"
                  type="password"
                  className="italic white border-none p-2"
                  placeholder="Senha"
                  value={senha}
                  onIonChange={(e) => setSenha(e.target.value?.toString() || '')}
                ><IonInputPasswordToggle slot="end"></IonInputPasswordToggle></IonInput>
              </div>
              
              <button
                type="submit"
                className="text-center text-base sm:text-lg lg:text-xl py-3 px-6 w-full bg-white rounded-md text-bluemike font-inter font-bold"
              >
                Entrar
              </button>
            </form>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
