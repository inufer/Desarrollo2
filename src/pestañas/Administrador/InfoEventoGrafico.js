import React from 'react';
import { Link } from 'react-router-dom';

import './InfoEventoGrafico.css'

function InfoEventoGrafico(props){
    return(
        <div className="containerInfoEventoGrafico">
            <div className="barraInfoEventoGrafico">
            <h1>
            &emsp; Info evento
            </h1>
            <label className="labelTitulo">  </label>
                <label className="labelName">  </label>
                <Link to="/">
                        <button className="buttonSalir" id="btnSalir"> SALIR</button>
                </Link>
                <Link to="Admin">
                        <button className="ButtonRegresar" id="btnRegresar"> Regresar</button>
                </Link>
            </div>
            <div className="caracteristicasInfoEventoGrafico">
                <div className="divImagenGrafico"></div>
            </div>
        </div>

    );
}

export default InfoEventoGrafico;