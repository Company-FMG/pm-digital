import * as React from "react";
import MikeLogin from "../assets/MikeLogin.svg"
import PublicSafety from "../assets/Public Safety.svg"
import Secure from "../assets/Secure.svg"
import MikeLogoSlogan  from "../assets/MikeLogoSlogan.svg"
import { IonInput } from "@ionic/react";
export default function Login() {
  return (
    
    <div className="flex flex-col px-14 py-20 mx-auto w-full bg-blue-700 max-w-[480px]">
      <img
        loading="lazy"
        src={MikeLogin}
        className="self-center max-w-full aspect-[1.0] w-[263px]"
      />
      <div className="self-center mt-8 text-xl font-medium text-center text-white">
        Um sistema inteligente para a segurança pública
      </div>
      <div className="flex gap-0 mt-14 text-xl text-white whitespace-nowrap">
        <img
          loading="lazy"
            srcSet={PublicSafety}
          className="shrink-0 w-9 aspect-square"
        />
        <IonInput type="text" className="italic white" placeholder="Matrícula"></IonInput>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a78b158e3c8ce9606698491daf89cee5265c1013705139db70921403ab34b2f4?apiKey=91a1d4223fb149a1a197b80828621a6c&"
        className="mt-3 w-full border-2 border-white border-solid aspect-[100] stroke-[2.194px] stroke-white"
      />
      <div className="flex gap-0 self-start mt-12 text-xl text-white whitespace-nowrap">
        <img
          loading="lazy"
            srcSet={Secure}
          className="shrink-0 w-9 aspect-[0.99]"
        />
         <IonInput type="password" className="italic white" placeholder="Senha"></IonInput>
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


