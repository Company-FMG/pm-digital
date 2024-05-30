import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter } from '@ionic/react';
import NavbarMike from '../components/global/NavbarMike';
import FooterMike from '../components/global/FooterMike';


export default function Home () {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <NavbarMike/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="grid place-content-center">
          <div className=""></div>
          <h1>Hello, Tab 1!</h1>
          <div className="bg-red w-8 h-8 rounded-full text-lg"></div>
        </div>
      </IonContent>
     {/* <IonFooter>
        <IonToolbar>
          <FooterMike/>
        </IonToolbar>
      </IonFooter>
        */}
    </IonPage>
  );
};

