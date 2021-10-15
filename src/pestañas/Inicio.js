import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {config} from './../config';


import { TextField } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/form.css';

import logoColor from '../assets/images/logos_choclo_color.png'
import choclo from '../assets/images/imagen_logo_sintexto.png'



class Inicio extends React.Component {

    
    state = {
        emailUsuario: '',
        passUsuario: '',

    }

    

    handleChange = e =>{
        this.setState ({
           [e.target.name] : e.target.value,
            
        });  
             
    }

    //CONEXIÓN PARA LOGUEARSE

    handleSubmit = e =>{
        e.preventDefault();
       
        axios.post(config.URL_BACKEND + '/user/authenticate', 
        {
            emailUsuario: this.state.emailUsuario, 
            passUsuario: this.state.passUsuario
        }
        )
        .then(res => {
            if(res.data.perfil ==2){
                localStorage.setItem('profile',2)
                window.location.href="/Admin";
            } else {
                localStorage.setItem('profile',1)
                window.location.href="/Usuario";
            }
        })
        
    }

   


    render(){
        return (
            <div className="row">

                <div className=" col-12 col-sm-10 col-md-8 NuevoUsuario__container">
                    <div className="NuevoUsuario__container-img"><img src={logoColor} /></div>
                    <h1>Te damos la bienvenida</h1>
                    <form onSubmit={this.handleSubmit} className="text-center">
                        
                        <div className="NuevoUsuario__container-form-group">
                            <label>Email</label>
                            <TextField fullWidth name="emailUsuario" type="email" onChange={this.handleChange} value ={this.state.emailUsuario}  variant="filled" />
                        </div>
                        
                        <div className="NuevoUsuario__container-form-group">
                            <label>Contraseña</label>
                            <TextField fullWidth type="password" name="passUsuario" onChange={this.handleChange} value ={this.state.passUsuario} variant="filled" />
                        </div>
                        
                            <button className="NuevoUsuario__form-button align-self-end" >Iniciar sesión</button>
                        
                        <Link to="NuevoUsuario">
                                <button className="NuevoUsuario__form-button mybutton-secundary align-self-end">Registrarse</button>
                        </Link>
                    </form>
                </div>
                <div className="d-none d-md-flex col-4 offset-md-1 NuevoUsuario__containerChoclo">
                    <img className="NuevoUsuario__containerChoclo-img align-self-center" src={choclo} alt="choclo" />
                </div>

            </div>

        );
    }
}

export default Inicio;

