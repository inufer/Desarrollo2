import React from 'react';
import {Link} from 'react-router-dom';
import './Usuario.css'

function Usuario(props){
    return(
        <div className="containerUsuario">
            
            <div className="barraUsuario">
            <label className="labelTitulo"></label>
            <h1>
            &emsp; Mi perfil de usuario
            </h1>
                <label className="labelName"></label>
                <Link to="/">
                        <button className="buttonSalir" id="btnSalir"> SALIR</button>
                </Link>
                <Link to="Admin">
                        <button className="ButtonRegresar" id="btnRegresar"> Regresar</button>
                </Link>
            </div>

            <div className="CaracteristicasUsuario">
                            <h3>
                            Aforo total = 100
                            <br></br>
                            Boletas disponibles = <br></br>
                            <button className="Evento1" id="">  Evento1 </button>
                            <button className="Evento2" id="">  Evento2 </button>
                            <button className="Evento3" id="">  Evento3 </button>
                            </h3> 
                        <img width={300} height={300} src="/imagenes/rock.jpg" alt=""/> 
                        <img width={300} height={300} src="/imagenes/piano.png" alt=""/> &emsp;
                        <img width={300} height={300}  src="/imagenes/deporte.png" alt=""/> 
                                 
                        <h3>
                            proceso de compra
                            <br></br>
                            Elija el evento que desea comprar  <br></br>
                            <button className="Evento1" id="">  Evento1 </button>
                            <button className="Evento2" id="">  Evento2 </button>
                            <button className="Evento3" id="">  Evento3 </button>
                            <br></br> <br></br>
                            <button className="Compra" id="">  Comprar </button>
                        </h3>
                </div>
            </div>
       
    );
}

export default Usuario;