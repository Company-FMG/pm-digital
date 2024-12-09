import { useState } from "react";
import PublicSafety from "../../assets/Public Safety.svg";
import Secure from "../../assets/Secure.svg";
import { IonContent, IonIcon, IonInput, IonInputPasswordToggle } from "@ionic/react";
import { useHistory } from "react-router-dom";
import PmDigitalComSlogan from '../../assets/PM Digital com Slogan.svg';
import axios from "axios";
import emailIcon from '../../assets/at-outline.svg';
import nomeIcon from '../../assets/person.svg';
import ReCAPTCHA from "react-google-recaptcha";

export default function Register() {
  const apiUrl = import.meta.env.VITE_API_URL!;
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleCaptchaChange = () => {
    setButtonDisabled(true);
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/policiais/register`, { nome, email, matricula, senha }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        console.log('Dados recebidos com sucesso!: ', response.data);

        localStorage.setItem('authToken', response.data.jwt);
        localStorage.setItem('matricula', response.data.matricula);
        localStorage.setItem('nome', response.data.nome);
        history.push('/home');
      } else if (response.status === 401) {
        alert('Usuário ou senha inválidos');
      } else {
        alert('Erro ao receber os dados: ' + response.status);
      }
    } catch (error: any) {
      if (error.response.status === 403) {
        alert('Usuário ou senha inválidos');
      }
    }
  };

  return (
    <IonContent>
      <main className="flex justify-center bg-bluemike min-h-screen w-full py-8 md:py-12">
        <div className="flex flex-col overflow-auto">
          <div className="mx-auto my-auto space-y-5">
            <div className="flex justify-center">
              <img
                loading="lazy"
                src={PmDigitalComSlogan}
                className="self-center w-72"
              />
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
              <IonInput
                color={"light"}
                type="text"
                className="italic white text-white"
                placeholder="Nome"
                required={true}
                value={nome}
                onIonChange={(e) => setNome(e.target.value?.toString() || '')}
              ><IonIcon slot="start" icon={nomeIcon} size="large"></IonIcon></IonInput>

              <IonInput
                color={"light"}
                type="text"
                className="italic white text-white"
                placeholder="E-mail"
                required={true}
                value={email}
                onIonChange={(e) => setEmail(e.target.value?.toString() || '')}
              ><IonIcon slot="start" icon={emailIcon} size="large"></IonIcon></IonInput>

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

              <ReCAPTCHA sitekey={import.meta.env.VITE_REACT_RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} className="justify-items-center" />

              <button type="submit"
                className="text-center text-base sm:text-lg lg:text-xl py-3 w-full bg-white rounded-md text-bluemike font-inter font-bold disabled:opacity-70"
                disabled={!isButtonDisabled}>
                Cadastrar
              </button>

              <div className="text-center">
                <a href="/" className="italic underline text-white">Já possui uma conta? Faça o login</a>
              </div>
            </form>

          </div>
        </div>
      </main>
    </IonContent>
  );
}
