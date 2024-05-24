import React from "react";
import mikelogo from '../assets/mikelogo.svg'
import MikeLogoSlogan from '../assets/MikeLogoSlogan.svg'

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

const Login: React.FC = () => {
  return (
    <main className="bg-blue-700 min-h-screen flex flex-col items-center justify-center">
      <div className="flex gap-0 md:flex-row flex-col w-full max-w-6xl">
        <section className="relative flex flex-col justify-center w-full md:w-2/5 min-h-[1160px]">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b84e908038c077e02a1562e4f24dbed83f5362f6c75c44829b09b51fbbb407bd?apiKey=91a1d4223fb149a1a197b80828621a6c&"
            alt="Background"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="relative bg-blue-700 bg-opacity-20 w-full h-full" />
        </section>
        <section className="flex flex-col items-end justify-center w-full md:w-3/5 pb-80 bg-blue-700 text-white">
          <div className="w-full max-w-lg pr-50 ">
            <Image
             src={MikeLogoSlogan}
              alt="Logo"
              className="w-full"
            />
            <form className="mt-10">
              <div className="mb-5">
                <IconLabel iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/bdec2657c7b3d519d79ecfb70044210c240c4dcb0bf94173044b674a3ab86a07?apiKey=91a1d4223fb149a1a197b80828621a6c&" label="Matrícula" />
                <input
                  type="text"
                  className="mt-2 p-3 w-full border-2 border-white bg-transparent text-white"
                  placeholder="Digite sua matrícula"
                />
              </div>
              <div className="mb-5">
                <IconLabel iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ebbd445098f55900b1e18de17dd2bab72152f02756d5e7d07501f68c845fd423?apiKey=91a1d4223fb149a1a197b80828621a6c&" label="Senha" />
                <input
                  type="password"
                  className="mt-2 p-3 w-full border-2 border-white bg-transparent text-white"
                  placeholder="Digite sua senha"
                />
              </div>
              <a href="#" className="text-xl italic underline">
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
};

export default Login;
