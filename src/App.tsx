import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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

/* Theme variables */
import './theme/variables.css';
import Gainvest from './pages/Gainvest101';
import { Menu } from './components/Menu';
import MeetTheTeam from './pages/MeetTheTeam';
import Portal from './pages/Portal';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPass';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Menu/>
      <IonRouterOutlet  id="main">
        <Route path="/home" component={Home} exact={true} />
        <Route path="/gainvest" component={Gainvest} exact={true} />
        <Route path="/meettheteam" component={MeetTheTeam} exact={true} />
        <Route path="/portal" component={Portal} exact={true} />
        <Route path="/signup" component={SignUp} exact={true} />
        <Route path="/forgotpass" component={ForgotPassword} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
