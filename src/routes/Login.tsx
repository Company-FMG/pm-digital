import * as React from "react";
import MikeLogin from "../assets/MikeLogin.svg"
import PublicSafety from "../assets/Public Safety.svg"
import Secure from "../assets/Secure.svg"
import MikeLogoSlogan  from "../assets/MikeLogoSlogan.svg"
export default function Login() {
  return (
    
    <div className="flex flex-col px-14 py-20 mx-auto w-full bg-blue-700 max-w-[480px]">
      <img
        loading="lazy"
        src={MikeLogin}
        className="self-center max-w-full aspect-[0.91] w-[263px]"
      />
      <div className="self-center mt-8 text-xl font-medium text-center text-white">
        Um sistema inteligente para a segurança pública
      </div>
      <div className="flex gap-3.5 mt-14 text-xl text-white whitespace-nowrap">
        <img
          loading="lazy"
            srcSet={PublicSafety}
          className="shrink-0 w-9 aspect-square"
        />
        <div className="flex-auto my-auto italic">Matrícula</div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a78b158e3c8ce9606698491daf89cee5265c1013705139db70921403ab34b2f4?apiKey=91a1d4223fb149a1a197b80828621a6c&"
        className="mt-3 w-full border-2 border-white border-solid aspect-[100] stroke-[2.194px] stroke-white"
      />
      <div className="flex gap-3.5 self-start mt-12 text-xl text-white whitespace-nowrap">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e7b49bad0bb65cb8148865cba46aff7691379693a59ddf0d0524a460fa93f73a?apiKey=91a1d4223fb149a1a197b80828621a6c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b49bad0bb65cb8148865cba46aff7691379693a59ddf0d0524a460fa93f73a?apiKey=91a1d4223fb149a1a197b80828621a6c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b49bad0bb65cb8148865cba46aff7691379693a59ddf0d0524a460fa93f73a?apiKey=91a1d4223fb149a1a197b80828621a6c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b49bad0bb65cb8148865cba46aff7691379693a59ddf0d0524a460fa93f73a?apiKey=91a1d4223fb149a1a197b80828621a6c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b49bad0bb65cb8148865cba46aff7691379693a59ddf0d0524a460fa93f73a?apiKey=91a1d4223fb149a1a197b80828621a6c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b49bad0bb65cb8148865cba46aff7691379693a59ddf0d0524a460fa93f73a?apiKey=91a1d4223fb149a1a197b80828621a6c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b49bad0bb65cb8148865cba46aff7691379693a59ddf0d0524a460fa93f73a?apiKey=91a1d4223fb149a1a197b80828621a6c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7b49bad0bb65cb8148865cba46aff7691379693a59ddf0d0524a460fa93f73a?apiKey=91a1d4223fb149a1a197b80828621a6c&"
          className="shrink-0 w-9 aspect-[0.97]"
        />
        <div className="my-auto italic">Senha</div>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center mt-3 border-2 border-white border-solid aspect-[161.5] stroke-[2.194px] stroke-white">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a78b158e3c8ce9606698491daf89cee5265c1013705139db70921403ab34b2f4?apiKey=91a1d4223fb149a1a197b80828621a6c&"
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a78b158e3c8ce9606698491daf89cee5265c1013705139db70921403ab34b2f4?apiKey=91a1d4223fb149a1a197b80828621a6c&"
          className="w-full border-2 border-white border-solid aspect-[100] stroke-[2.194px] stroke-white"
        />
      </div>
      <button className="self-end mt-5 text-base italic text-white underline">
        Esqueci minha senha
      </button>
      <button className="justify-center items-center px-16 py-5 mt-7 text-xl font-bold text-blue-700 whitespace-nowrap bg-white rounded-md" >
        Entrar
      </button>
    </div>
  );
}


