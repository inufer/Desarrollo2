//27-08-2021 
import './App.css';
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
            <Inicio tittle="Eventos Choclo" name="Juan1" cargo="Administrador"/>
          </Route>
          <Route path="/Perfil" exact>
            <Perfil tittle="Eventos Choclo" name="Juan1" cargo="Administrador"/>
          </Route>
          <Route path="/Admin">
            <Admin tittle="Eventos  Choclo" name="Juan1" cargo="Administrador"/>
          </Route>
          <Route path="/EditarEvento">
            <EditarEvento tittle="Eventos Choclo" name="Juan1" cargo="Administrador"/>
          </Route>
          <Route path="/InfoEventoGrafico">
            <InfoEventoGrafico tittle="Eventos Choclo" name="Juan1" cargo="Administrador"/>
          </Route>
          <Route path="/Usuario">
            <Usuario tittle="Eventos Choclo" name="Juan1" cargo="Administrador"/>
          </Route>
          <Route path="/NuevoUsuario">
            <NuevoUsuario tittle="Eventos Choclo" name="Juan1" cargo="Administrador"/>
          </Route>
          <Route path="/InfoEvento">
            <InfoEvento tittle="Eventos Choclo" name="Juan1" cargo="Administrador"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
