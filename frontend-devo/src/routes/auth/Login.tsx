import { useState } from "react";
import PublicSafety from "../../assets/Public Safety.svg";
import Secure from "../../assets/Secure.svg";
import { IonContent, IonIcon, IonInput, IonInputPasswordToggle, IonPage } from "@ionic/react";
import { useHistory } from "react-router-dom";
import PmDigitalComSlogan from '../../assets/PM Digital com Slogan.svg';
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  const apiUrl = import.meta.env.VITE_API_URL!;
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleCaptchaChange = () => {
    setButtonDisabled(true);
  }

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
          localStorage.setItem('matricula', response.data.matricula);
          localStorage.setItem('placaViatura', response.data.placaViatura);
          localStorage.setItem('nome', response.data.nome);
          history.push('/home');
      } else if(response.status === 401) {
          alert('Usuário ou senha inválidos');
      } else {
          alert('Erro ao receber os dados: ' + response.status);
      }
    } catch (error: any) {
      console.log(error);

      if(error.code === 'ERR_NETWORK') {
        alert('Erro ao se conectar com o servidor');
      } else if(error.response.status === 403) {
        alert('Usuário ou senha inválidos');
      }
    }
  };

  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col w-full justify-center bg-bluemike h-full px-12 sm:px-10 md:px-20 lg:px-32 xl:px-44 overflow-hidden">
          <div className="mx-auto my-auto py-10 space-y-8 max-w-md sm:max-w-lg lg:max-w-2xl ml-100">
            <img
              loading="lazy"
              src={PmDigitalComSlogan}
              className="self-center w-full mb-10"
            />

            <form onSubmit={handleLogin} className="space-y-8">
              <IonInput
                color={"light"}
                type="text"
                className="italic white text-white"
                placeholder="Matrícula"
                inputMode="numeric"
                required={true}
                value={matricula}
                onIonChange={(e) => setMatricula(e.target.value?.toString() || '')}
              ><IonIcon slot="start" icon={PublicSafety} size="large"></IonIcon></IonInput>

              <IonInput
                color="light"
                type="password"
                className="italic white text-white"
                placeholder="Senha"
                required={true}
                value={senha}
                onIonChange={(e) => setSenha(e.target.value?.toString() || '')}
              >
                <IonIcon slot="start" icon={Secure} size="large"></IonIcon>
                <IonInputPasswordToggle slot="end" color={"light"}></IonInputPasswordToggle>
              </IonInput>

              <ReCAPTCHA sitekey={import.meta.env.VITE_REACT_RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} className="justify-items-center my-8"/>
              
              <button
                type="submit"
                className="text-center text-base sm:text-lg lg:text-xl py-3 px-6 w-full bg-white rounded-md text-bluemike font-inter font-bold disabled:opacity-70"
                disabled={!isButtonDisabled}
              >
                Entrar
              </button>

              <div className="text-center">
                <a href="/register" className="italic underline text-white">Primeiro acesso? Começe aqui</a>
              </div>
            </form>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
