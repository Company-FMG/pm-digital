import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import policialbg from "../../assets/policialbg.png";
import PMDigitalcomSlogan from "../../assets/PM Digital com Slogan.svg";
import PublicSafety from "../../assets/Public Safety(1).png";
import Secure from "../../assets/Secure(1).png"; 
import axios from "axios";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}
const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

export default function Login() {
  const api_url = import.meta.env.VITE_REACT_API_URL;
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${api_url}/despachantes/login`, {matricula, senha}, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
          console.log('Dados recebidos com sucesso!: ', response.data);

          localStorage.setItem('authToken', response.data.jwt);
          localStorage.setItem('nome', response.data.nome);
          navigate('/home');
      } else if(response.status === 401) {
          alert('Usuário ou senha inválidos');
      } else {
          alert('Erro ao receber os dados: ' + response.status);
      }
    } catch (error) {
        alert('Erro:' + error);
    }
  };

  return (
    <main className="bg-bluemike flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="flex mx-auto gap-0 sm:gap-8 lg:mx-0 px-4 lg:px-0 items-center lg:flex-row h-screen">
        <section className="justify-center">
          <Image
            src={policialbg}
            alt="Background"
            className="hidden lg:block object-cover lg:w-[36rem] xl:w-[48rem] 2xl:w-[65rem] h-screen brightness-75"
          />
        </section>
        <section className="flex flex-col mx-auto my-auto items-end text-end justify-center text-white">
          <div className="flex flex-col gap-4 2xl: gap-8">
            <Image
              src={PMDigitalcomSlogan}
              alt="Logo"
               className="w-64 sm:w-72 md:w-64 xl:w-72 2xl:w-96 max-w-full mx-auto"
            />
            <form className="flex flex-col gap-5 2xl:gap-6" onSubmit={handleLogin}>

              <div className="flex items-center gap-3">
                <img src={PublicSafety} alt="Matrícula" className="w-7 h-7" />
                <input
                  type="text"
                  className="p-3 w-full border-b bg-transparent text-white italic"
                  placeholder="Matrícula"
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-3">
                <img src={Secure} alt="Senha" className="w-7 h-7" />
                <input
                  type="password"
                  className="p-3 w-full border-b bg-transparent text-white italic"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              <a href="#" className="text-md italic underline">
                Esqueci minha senha
              </a>

              <button
                type="submit"
                className="p-3 w-full bg-white text-blue-700 text-xl font-bold rounded-lg">
                Entrar
              </button>
              <div className="text-center">
                <a href="/register" className="text-md italic underline">Primeiro acesso? Começe aqui</a>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
