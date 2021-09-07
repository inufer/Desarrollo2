import React from 'react';
import { Link } from 'react-router-dom';

import './SeleccionarEvento.css'

function SeleccionarEvento(props){
    return(
        <div className="containerSeleccionarEvento">
            <div className="barraInfoSeleccionarEvento">
            <label className="labelTitulo"></label>
            <h1>
            &emsp; Seleccionar evento
            </h1>
                <label className="labelName"></label>
                <Link to="/">
                        <button className="buttonSalir" id="btnSalir"> SALIR</button>
                </Link>
                <Link to="Admin">
                        <button className="ButtonRegresar" id="btnRegresar"> Regresar</button>
                </Link>
            </div>
            <div className="caracteristicasSeleccionarEvento">
                                <h2>Selecciona el evento a eliminar </h2> 
                                
                        <button className="Evento1" id=""> Evento1 </button>  &emsp;
                        <button className="Evento1" id=""> Evento2 </button> &emsp;
                        <button className="Evento1" id=""> Evento3 </button>  &emsp;
                        <br></br> <br></br>
                        <img width={300} height={300} src="/imagenes/rock.jpg" alt=""/>
                        <img width={300} height={300} src="/imagenes/piano.png" alt=""/>
                        <img width={300} height={300}  src="/imagenes/deporte.png" alt=""/>                
                </div>
            </div>
                
          
       

    );
}

export default SeleccionarEvento;