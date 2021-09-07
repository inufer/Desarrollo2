import React from 'react';
import { Link } from 'react-router-dom';
import './InfoEvento.css'

function InfoEvento(props){
    return(
        <div className="containerInfoEvento">
            <div className="barraInfoEvento">
            <label className="labelTitulo"></label>
                <label className="labelName"></label>
                <Link to="/">
                        <button className="buttonSalir" id="btnSalir"> SALIR</button>
                </Link>
            </div>
            <div className="caracteristicasInfoEvento">
                <div className="imagenCabecera"></div>
                <div className="imagenAsientos"></div><br></br>
                <div>
                    <fieldset className="fieldInfoEvento">
                    <label class="labelInfo">Nombre y descripcion del Evento </label>
                    <br></br><br></br>
                    <label class="labelInfo">Fecha </label>
                    <br></br><br></br>
                    <label class="labelInfo">Direccion </label>
                    <br></br><br></br>
                    <button id="btnRegistrarse"> comprar
                    </button> 
                    <br></br>
                    <Link to="/Usuario">
                        <button id="btnRegresar"> Regresar
                        </button>
                    </Link>
                    <br></br>
                    </fieldset>

                </div>
            </div>
        </div>

    );
}

export default InfoEvento;