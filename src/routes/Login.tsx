import * as React from "react";
import MikeLogin from "../assets/MikeLogin.svg"
import PublicSafety from "../assets/Public Safety.svg"
import Secure from "../assets/Secure.svg"
import MikeLogoSlogan  from "../assets/MikeLogoSlogan.svg"
import { IonButton, IonContent, IonInput, IonPage } from "@ionic/react";
export default function Login() {
  return (
    <IonPage>
    <IonContent>
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
        <IonInput color="light"type="text" className="italic white" placeholder="Matrícula"></IonInput>
      </div>
     
      <div className="flex gap-0  mt-14 text-xl text-white whitespace-nowrap">
        <img
          loading="lazy"
            srcSet={Secure}
          className="shrink-0 w-9 aspect-square"
        />
         <IonInput color="light" type="password" className="italic white" placeholder="Senha"></IonInput>
      </div>













      <button className="self-end mt-5 pb-12 text-base italic text-white underline">
        Esqueci minha senha
      </button>
      <IonButton href="/" className="text-center italic text-xl p-35 rounded-xl h-14 w-73 bg-white" color="primary" fill="outline">
        Entrar
      </IonButton>
    </div>
    </IonContent>
    </IonPage>
  );
  
}



