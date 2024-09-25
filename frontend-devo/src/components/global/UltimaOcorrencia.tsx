import { Share } from "@capacitor/share";
import { IonAccordion, IonAccordionGroup, IonItem } from "@ionic/react";
import SentIcon from "../../assets/SentIcon.svg"

export default function UltimaOcorrencia() {

    async function ShareContent() {
        const shareRoute = await Share.canShare();
        console.log(shareRoute)

        if (shareRoute.value) {
            await Share.share({
                url: "https://www.google.com/maps/dir/R.+Gen.+Viriato+de+Medeiros,+216+-+COHAB,+Recife+-+PE,+51290-600,+Brasil/-8.131462,+-34.905769/@-8.1204833,-34.9377716,14.5z/data=!4m12!4m11!1m5!1m1!1s0x7ab1e7543b552c5:0x682b6cc0c4f5dc55!2m2!1d-34.9496589!2d-8.123013!1m3!2m2!1d-34.905769!2d-8.131462!3e1?hl=pt-br&entry=ttu"
            })
        }
    }

    return (
        <>
            <IonAccordionGroup expand="inset">
                <IonAccordion value="first">
                    <IonItem slot="header" color="light" >
                        <div className="mx-auto">
                            <label className="font-poppins font-semibold text-gray-700">Última ocorrência</label>
                        </div>
                    </IonItem>

                    <div className="my-auto py-auto px-4" slot="content">
                        <h1 className="text-base font-bold font-inter text-black ">Localização: R. João Dias Martins, Boa Viagem, Recife - PE</h1>
                        <button onClick={ShareContent} className="flex flex-row items-center justify-center gap-2 bg-bluemike rounded-md py-4 w-full my-6">
                            <span className="text-xs text-white font-inter font-bold">COMPARTILHAR ROTA</span>
                            <img className="w-6" src={SentIcon} />
                        </button>
                    </div>

                </IonAccordion>
            </IonAccordionGroup>
        </>
    )
}