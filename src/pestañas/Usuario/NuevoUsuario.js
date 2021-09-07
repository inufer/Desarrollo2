import React from 'react';
import './NuevoUsuario.css';
import {Link} from 'react-router-dom';

function NuevoUsuario(props){
    return(
        <div className="containerNuevoUsuario">
            <div className="caracteristicasNuevoUsuario">

                <fieldset class="fieldNuevo">
                    <legend class="legendNuevo">Registro</legend>
                <h2>
                    <label class="labelNuevo">Nombre : </label>
                    <input type="text"/>
                </h2>

                <h2>
                    <label class="labelNuevo">Apellido : </label>
                    <input type="text" />
                </h2>

                <h2>
                    <label class="labelNuevo">Cedula : </label>
                    <input type="text" />
                </h2>

                <h2>
                    <label class="labelNuevo">Edad : </label>
                    <input type="text" />
                </h2>

                <h2>
                    <label class="labelNuevo">Correo Electronico : </label>
                    <input type="text" />
                </h2>

                <h2>
                    <label class="labelNuevo">Nick : </label>
                    <input type="text" />
                </h2>

                <h2>
                    <label class="labelNuevo">Contraseña : </label>
                    <input type="text" />
                </h2>
                <br></br>
                <h2>
                    <Link to="/">
                        <button id="btnRegistrarse"> Registrarse</button> 
                    </Link>
                </h2>
                </fieldset>

            </div>
        </div>

    );
}

export default NuevoUsuario;