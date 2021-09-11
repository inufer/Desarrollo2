import React from 'react';
import './NuevoUsuario.css';

import { TextField } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/form.css';

import logoColor from '../../assets/images/logos_choclo_color.png'
import choclo from '../../assets/images/imagen_logo_sintexto.png'



class NuevoUsuario extends React.Component {

    state = {
        nombreUsuario: '',
        apellidoUsuario: '',
        cedulaUsuario: '',
        emailUsuario: '',
        contraseñaUsuario: '',

    }

    handleChange = e =>{
        this.setState ({
           [e.target.name] : e.target.value,
            
        });  
             
    }

    handleClick = e =>{
        console.log('hiciste click')
    } 

    handleSubmit = e =>{
        e.preventDefault();
        console.log('Se hizo submit')
    }


    render(){
        return (
            <div className="row">

                <div className=" col-12 col-sm-10 col-md-8 NuevoUsuario__container">
                    <div className="NuevoUsuario__container-img"><img src={logoColor} /></div>
                    <h1>Te damos la bienvenida</h1>
                    <form onSubmit={this.handleSubmit} className="text-center">

                        <div className="NuevoUsuario__container-form-group">
                             <label>Nombre</label>
                             <TextField fullWidth name="nombreUsuario" onChange={this.handleChange} value ={this.state.nombreUsuario} variant="filled" />
                        </div>
                        <div className="NuevoUsuario__container-form-group">
                            <label>Apellido</label>
                            <TextField fullWidth name="apellidoUsuario" onChange={this.handleChange} value ={this.state.apellidoUsuario} variant="filled" />
                        </div>
                        <div className="NuevoUsuario__container-form-group">
                            <label>Cédula</label>
                            <TextField fullWidth name="cedulaUsuario" onChange={this.handleChange} value ={this.state.cedulaUsuario} variant="filled" />
                        </div>
                        
                        <div className="NuevoUsuario__container-form-group">
                            <label>Email</label>
                            <TextField fullWidth name="emailUsuario" type="email" onChange={this.handleChange} value ={this.state.emailUsuario}  variant="filled" />
                        </div>
                        
                        <div className="NuevoUsuario__container-form-group">
                            <label>Contraseña</label>
                            <TextField fullWidth name="contraseñaUsuario" onChange={this.handleChange} value ={this.state.contraseñaUsuario} variant="filled" />
                        </div>
                        <button className="NuevoUsuario__form-button align-self-end" onClick={this.handleClick} >Registrarse</button>


                    </form>
                </div>
                <div className="d-none d-md-flex col-4 offset-md-1 NuevoUsuario__containerChoclo">
                    <img className="NuevoUsuario__containerChoclo-img align-self-center" src={choclo} alt="choclo" />
                </div>

            </div>

        );
    }

}

export default NuevoUsuario;