import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import NavbarMike from '../components/global/NavbarMike';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <NavbarMike/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="grid  place-content-center">
          <div className=""></div>
          <h1>Hello, Tab 1!</h1>
          <div className="bg-red w-8 h-8 rounded-full text-lg"></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
