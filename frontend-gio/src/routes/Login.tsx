import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import image18 from "../assets/image 18.png";
import PMDigitalcomSlogan from "../assets/PM Digital com Slogan.svg"

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}
const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

interface IconLabelProps {
  iconSrc: string;
  label: string;
}
const IconLabel: React.FC<IconLabelProps> = ({ iconSrc, label }) => (
  <div className="flex gap-5 text-3xl font-light text-white">
    <Image src={iconSrc} alt={label} className="shrink-0 w-9 h-9" />
    <div className="italic">{label}</div>
  </div>
);

export default function Login(){
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de autenticação simulada
    if (matricula === 'user' && senha === 'password') {
      localStorage.setItem('authToken', 'fakeToken');
      navigate('/home');
    } else {
      alert('Matrícula ou senha inválida');
    }
  };

  return (
    <main className="bg-blue-700 min-h-screen flex flex-col items-center justify-center">
      <div className="flex gap-0 md:flex-row flex-col w-full max-w-6xl">
        <section className="relative flex flex-col justify-center w-full md:w-2/5 min-h-[1160px]">
          <Image
            src={image18}
            alt="Background"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="relative bg-blue-700 bg-opacity-20 w-full h-full" />
        </section>
        <section className="flex flex-col items-end justify-center w-full md:w-3/5 pb-80 bg-blue-700 text-white">
          <div className="w-full max-w-lg pr-30 ">
            <Image
             src={PMDigitalcomSlogan}
              alt="Logo"
              className="w-full"
            />
            <form className="mt-20" onSubmit={handleLogin}>
              
              
              <div className="mb-5">
                <input
                  type="text"
                  className="mt-2 p-3 w-full border-1 border-b bg-transparent text-white italic"
                  placeholder="Matrícula"
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                />
              </div>
              <div className="mb-5">
                
                <input
                  type="password"
                  className="mt-2 p-3 w-full border-1 border-b bg-transparent text-white italic"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              <a href="#" className="text-xl italic underline" style={{ margin: '300px' }} >
                Esqueci minha senha
              </a>
              <button
                
                type="submit"
                className="mt-10 p-4 w-full bg-white text-blue-700 text-2xl font-bold rounded-lg"
              >
                Entrar
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}