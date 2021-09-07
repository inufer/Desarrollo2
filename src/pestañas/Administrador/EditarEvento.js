import React from 'react';
import { Link } from 'react-router-dom';

import './EditarEvento.css'

function EditarEvento(props){
    return(
        <div className="containerEditarEvento">
            <div className="barraInfoEditar">
            <label className="labelTitulo"> </label>
            <h1>
            &emsp; Editar evento
            </h1>
                <label className="labelName"></label>
                <Link to="/">
                        <button className="buttonSalir" id="btnSalir"> SALIR</button>
                </Link>
                <Link to="Admin">
                        <button className="ButtonRegresar" id="btnRegresar"> Regresar</button>
                </Link>
            </div>
            <div className="CaracteristicasEvento">
                <br></br>
            <fieldset class="fieldEditar">
                    <legend class="legendEditar">Nombre Evento</legend>
                <p>
                    <label class="labelEditar">Nombre : </label>
                    <input type="text"/>
                </p>

                <p>
                    <label class="labelEditar">Descripcion : </label>
                    <input type="text" />
                </p>

                <p>
                    <label class="labelEditar">Estado (pendiente, en progreso, finalizado) : </label>
                    <input type="text" />
                </p>

                <p>
                    <label class="labelEditar">disponibilidad(cantidad entradas) : </label>
                    <input type="text" />
                </p>

                <p>
                    <label class="labelEditar">Direccion : </label>
                    <input type="text" />
                </p>

                <p>
                    <label class="labelEditar">Tel contacto : </label>
                    <input type="text" />
                </p>

                <p>
                    <label class="labelEditar">Correo contacto : </label>
                    <input type="text" />
                </p>
                <br></br>
                <p>
                    <Link to="/Admin">
                        <button id="btnRegistrarse"> Aceptar</button> 
                    </Link>
                </p>
                </fieldset>
            </div>
        </div>

    );
}

export default EditarEvento;