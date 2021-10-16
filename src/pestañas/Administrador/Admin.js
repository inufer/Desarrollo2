import React, { useState } from 'react';
import './Admin.css'
import EditarEvento from './EditarEvento';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { AppBar, Grid, IconButton, Toolbar, Box } from '@material-ui/core';
import InfoEvento from '../Usuario/InfoEvento';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { isElementOfType } from 'react-dom/test-utils';
import { Component, Fragment } from 'react';
import axios from 'axios';


let url = 'http://localhost:5500';

if(localStorage.getItem('profile')!=null){
    if(localStorage.getItem('profile')==1){
        window.location.href="/Usuario";
    }
}

class Admin extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            datosCargados:false,
            datos:[]
        }
    }



    borrarRegistros=(id)=>{
        console.log(id);
       
        fetch("http://localhost/eventochoclo/eventos/?borrar="+id)
       .then(respuesta=>respuesta.json())
       .then((datosRespuesta)=>{
           console.log(datosRespuesta);
           this.cargarDatos();
        })
       .catch(console.log)
            
    }



    cargarDatos(){
        fetch("http://localhost/eventochoclo/eventos/")
       .then(respuesta=>respuesta.json())
       .then((datosRespuesta)=>{
           console.log(datosRespuesta);
           this.setState({datosCargados:true, datos:datosRespuesta})
        })
       .catch(console.log)
    }
    
    componentDidMount(){
       this.cargarDatos();
    }

    //Simula que puede verificar los perfiles y el inicio de sesion

    

    render (){
        const{datosCargados, datos}=this.state

        return(
            <div>
                 
                <Grid container direction="row"   style={{ background: '#37474f' }} >
                    
                    <Grid item xs={12}>
                    <AppBar  position="static" style={{ background: '#fff176' }}>
                            <Toolbar>
                                <IconButton edge="start"  color="inherit" aria-label="menu">
                                </IconButton>
                                <Typography variant="h6" component="div">
                                <img width={60} height={30} src="src\assets\images\logos_choclo_color.png" />
                                </Typography>
                                <Link to="/Perfil" style={{marginLeft: "80%"}}>
                                    <Button color="black"  >Perfil</Button>
                                </Link>
                                <Link to="/">
                                    <Button color="black"  >Salir</Button>
                                </Link>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                   
                   

                    
                    {datos.map(
                            (dato)=>(
                                <Grid item   xs={12} sm={6} lg={4} >
                                <Box xs={4} ml="5%" mr="5%" mt="3%" textAlign="center" boxShadow={3} bgcolor="white" border={2} borderRadius={16} borderColor="white" p={{xs:2, sm:3, md:5}}>
                                    <img width={300} height={300} src={dato.imagen} alt=""/>
                                    <h3>
                                        Aforo total ={dato.disponibilidad}
                                        <br></br>
                                        <br></br>
                                        <Link to={"/EditarEvento/" + dato.id_evento}>
                                            <Button align="center" size="large" variant="outlined" color="primary">Editar</Button>
                                        </Link>
                                            <Button align="center" size="large" variant="outlined" color="primary"
                                            onClick = {()=>this.borrarRegistros(dato.id_evento)}
                                            >Eliminar</Button>
                                    </h3> 
                                </Box>
                                </Grid> 
                            )
                        )}
                    <Grid item   xs={12} sm={6} lg={4}> 
                        <Box ml="5%" mr="5%" mt="3%"  textAlign="center" boxShadow={3} bgcolor="white" border={2} borderRadius={16} borderColor="white" p={{xs:2, sm:3, md:5}}>
                            <h3>
                                NUEVO
                                <br></br>
                                <br></br>
                                <Link to="/EditarEvento">
                                    <Button align="center" size="large" variant="outlined" color="primary">Crear</Button>
                                </Link>
                                </h3> 
                        </Box>
                    </Grid>
                </Grid>
            </div>
            );

    }

   
    
       
}

export default Admin;