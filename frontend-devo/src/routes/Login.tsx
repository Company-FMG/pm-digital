import * as React from "react";
import MikeLogin from "../assets/MikeLogin.svg";
import PublicSafety from "../assets/Public Safety.svg";
import pmDigitalLogo from '../assets/PM Digital Logo.svg';
import Secure from "../assets/Secure.svg";
import MikeLogoSlogan from "../assets/MikeLogoSlogan.svg";
import { IonButton, IonCol, IonContent, IonHeader, IonImg, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useHistory } from "react-router";
import PmDigitalComSlogan from '../assets/PM Digital com Slogan.svg';

export default function Login() {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent>
        <div className="w-full bg-bluemike h-full px-6 sm:px-10 md:px-20 lg:px-32 xl:px-44">
          <div className="flex flex-col py-10 mx-auto space-y-8 max-w-md sm:max-w-lg lg:max-w-2xl">
            <img
              loading="lazy"
              src={PmDigitalComSlogan}
              className="self-center aspect-[1.0] w-32 sm:w-40 md:w-48 lg:w-52"
            />

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
              />
            </div>

            <button className="self-end mt-4 text-sm sm:text-base italic text-white underline">
              Esqueci minha senha
            </button>
            
            <button
              onClick={() => history.push("/home")}
              className="text-center text-base sm:text-lg lg:text-xl py-3 px-6 w-full bg-white text-bluemike font-inter font-bold"
            >
              Entrar
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
