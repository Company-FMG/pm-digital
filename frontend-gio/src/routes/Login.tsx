import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import policialbg from "../assets/policialbg.png";
import PMDigitalcomSlogan from "../assets/PM Digital com Slogan.svg";
import PublicSafety from "../assets/Public Safety(1).png";
import Secure from "../assets/Secure(1).png"; 
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
    <main className="bg-blue-700 flex flex-col justify-center">
      <div className="flex mx-auto gap-0 sm:gap-8 lg:mx-0 px-12 lg:px-0 items-center lg:flex-row h-screen">
        <section className="justify-center">
          <Image
            src={policialbg}
            alt="Background"
            className="hidden lg:block object-cover lg:w-[36rem] xl:w-[48rem] 2xl:w-[65rem] h-screen brightness-75"
          />
        </section>
        <section className="flex flex-col mx-auto items-end text-end justify-center bg-blue-700 text-white">
          <div className="w-full max-w-md 2xl:max-w-lg px-4 lg:px-16 2xl:px-12 mx-auto my-auto">
            <Image
              src={PMDigitalcomSlogan}
              alt="Logo"
              className="w-auto"
            />
            <form className="pt-20" onSubmit={handleLogin}>

              <div className="mb-5 flex items-center gap-3">
                <img src={PublicSafety} alt="Matrícula" className="w-7 h-7" />
                <input
                  type="text"
                  className="mt-2 p-3 w-full border-b bg-transparent text-white italic"
                  placeholder="Matrícula"
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                />
              </div>

              <div className="mb-5 flex items-center gap-3">
                <img src={Secure} alt="Senha" className="w-7 h-7" />
                <input
                  type="password"
                  className="mt-1 p-3 w-full border-b bg-transparent text-white italic"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              <a href="#" className="text-xl italic underline">
                Esqueci minha senha
              </a>

              <button
                type="submit"
                className="mt-10 p-4 w-full bg-white text-blue-700 text-2xl font-bold rounded-lg">
                Entrar
              </button>
              <div className="text-center mt-8">
                <a href="/register" className="text-xl italic underline">Primeiro acesso? Começe aqui</a>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
