//27-08-2021 
import './assets/css/App.css';
import Inicio from './pestañas/Inicio'
import Admin from './pestañas/Administrador/Admin'
//import Note from './pestañas/Administrador/Note'
import EditarEvento from './pestañas/Administrador/EditarEvento';
import InfoEventoGrafico from './pestañas/Administrador/InfoEventoGrafico';
import Perfil from './pestañas/Administrador/Perfil';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NuevoUsuario from './pestañas/Usuario/NuevoUsuario';
import Usuario from './pestañas/Usuario/Usuario';
import InfoEvento from './pestañas/Usuario/InfoEvento';


function App() {
  return (

    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/Perfil" exact>
            <Perfil />
          </Route>
          <Route path="/Admin">
            <Admin />
          </Route>
          <Route path="/editarEvento/:id" component={EditarEvento}>
          </Route>
          <Route path="/InfoEventoGrafico">
            <InfoEventoGrafico />
          </Route>
          <Route path="/Usuario" exact>
            <Usuario/>
          </Route>
          <Route path="/NuevoUsuario" >
            <NuevoUsuario/>

          </Route>
          <Route path="/InfoEvento">
            <InfoEvento />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
