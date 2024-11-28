import { Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './routes/home/Home'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
/* import '@ionic/react/css/palettes/dark.system.css'; */

/* Theme variables */
import './theme/variables.css';
import Login from './routes/Login';
import Relatorio from './routes/Relatorio';
import Perfil from './routes/profile/Perfil';
import Register from './routes/Register';
import ViaturasDisponiveis from './routes/viaturas/ViaturasDisponiveis';
import LiveMapTest from './routes/home/LiveMapTest';

setupIonicReact();

export default function AppRoutes() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/"><Login /></Route>
          <Route exact path='/home'><Home /></Route>
          <Route exact path='/relatorio'><Relatorio/></Route>
          <Route exact path='/perfil'><Perfil/></Route>
          <Route exact path='/register'><Register/></Route>
          <Route exact path='/viaturas-disponiveis'><ViaturasDisponiveis/></Route>
          <Route exact path='/teste-mapa'><LiveMapTest/></Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};


