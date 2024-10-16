import * as React from "react";
import MikeLogin from "../assets/MikeLogin.svg"
import PublicSafety from "../assets/Public Safety.svg"
import pmDigitalLogo from '../assets/PM Digital Logo.svg'
import Secure from "../assets/Secure.svg"
import MikeLogoSlogan from "../assets/MikeLogoSlogan.svg"
import { IonButton, IonCol, IonContent, IonHeader, IonImg, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useHistory } from "react-router";
import PmDigital from "../assets/PM Digital com Slogan.svg"

export default function Login() {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent>
        <div className="w-full bg-bluemike h-full pr-40 pl-40">
          <div className="flex flex-col px-14 lg:px-80 md:py-30 mx-auto  space-y-6">
            <img
              loading="lazy"
              src={PmDigital}
              className="self-center aspect-[1.0] w-48 md:w-52"
            />


            <div className="flex gap-0 mt-14 text-xl text-white whitespace-nowrap">
              <img
                loading="lazy"
                  srcSet={PublicSafety}
                className="shrink-0 w-9 aspect-square"
              />
              <IonInput color="light" type="text" className="italic white" placeholder="Matrícula"></IonInput>
            </div>
          
            <div className="flex gap-0  mt-12 text-xl text-white whitespace-nowrap">
              <img
                loading="lazy"
                  srcSet={Secure}
                className="shrink-0 w-9 aspect-square"
              />
              <IonInput color="light" type="password" className="italic white" placeholder="Senha"></IonInput>
            </div>
            
            <button className="self-end mt-5 pb-7 text-base italic text-white underline">
              Esqueci minha senha
            </button>
            <button onClick={() => history.push("/home")} className="text-center text-xl p-35 rounded-md h-14 w-73 bg-white text-bluemike font-inter font-bold" color="primary">
              Entrar
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );

}



