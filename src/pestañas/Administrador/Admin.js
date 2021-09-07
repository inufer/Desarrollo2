import React, { useState } from 'react';
import './Admin.css'
import EditarEvento from './EditarEvento';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import InfoEvento from './../Usuario/InfoEvento';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const useStyles = makeStyles((theme) => ({
    appbar:{
        backgroundColor: 'green'
    },
    fondoPresentacion: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/imagenes/volley.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}));



function Admin(props){
    const classes = useStyles();
    
        return(
                <div className="containerAdmin">
                    <AppBar>
                    </AppBar>
                <div className="barraInfo">
                <label className="labelTitulo"> </label>
                <h1>
            &emsp; Mi perfil de Admin
            </h1>
                <label className="labelName">   </label>
                <Link to="/">
                        <button className="buttonSalir" id="btnSalir"> SALIR</button>
                </Link>
                </div>
                <div className="opcionesAdmin">
                    <Link to="/EditarEvento">
                        <button className="buttonNuevoEvento" id="btnNuevoEvento"> NUEVO</button>
                    </Link>
                    <Link to="EditarEvento">
                        <button className="buttonEditarEvento" id="btnEditarEvento"> EDITAR</button>
                    </Link>
                    <Link to="SeleccionarEvento">
                        <button className="buttonEliminarEvento" id="btnEliminarEvento"> ELIMINAR</button>
                    </Link>
                    <Link to="Note">
                        <button className="buttonNote" id="btnNote"> NOTAS</button>
                    </Link>
                   
                    
                </div>
            
                <div className="eventos">
                        
                        <img width={300} height={300} src="/imagenes/rock.jpg" alt=""/>
                        <h3>
                            Aforo total = 100
                            <br></br>
                            Boletas disponibles <br></br>
                            <button className="Evento1" id=""> ConsultarDisponibilidad </button>
                        </h3> 
                        <br></br>
                        <img width={300} height={300} src="/imagenes/piano.png" alt=""/>
                        <h3>
                            Aforo total = 100
                            <br></br>
                            Boletas disponibles <br></br>
                            <button className="Evento1" id=""> ConsultarDisponibilidad </button>
                        </h3> 
                        <br></br>
                        <img width={300} height={300}  src="/imagenes/deporte.png" alt=""/> 
                        <h3>
                            Aforo total = 100
                            <br></br>
                            Boletas disponibles <br></br>
                            <button className="Evento1" id=""> ConsultarDisponibilidad </button>
                        </h3>            
                </div>
            </div>
            );
}


export default Admin;