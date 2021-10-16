import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { AppBar, Grid, IconButton, Toolbar, Box } from '@material-ui/core';


if(localStorage.getItem('profile')!=null){
    if(localStorage.getItem('profile')==2){
        window.location.href="/Admin";
    }
}


class Usuario extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            datosCargados:false,
            datos:[]
        }
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

    render (){
        const{datosCargados, datos}=this.state

        return(
            <div>
                 
                <Grid container direction="row"  minHeight = '100vh' style={{ background: '#37474f' }} >
                    
                <Grid item xs={12}>
                    
                <AppBar  position="static" style={{ background: '#fff176' }}>
                    
                    <Toolbar>
                        <IconButton edge="start"  color="inherit" aria-label="menu">
                        </IconButton>
                        <Typography variant="h6"  class="navbar-brand" xs={12} md={8}>
                        Pal logo
                        </Typography >
                        <Link to="/Perfil" style={{marginLeft: "80%"}}>
                                    <Button color="black" xs={12} md={2}  >Perfil</Button>
                        </Link>
                        <Link to="/Usuario">
                            <Button color="black" xs={12} md={2}>Inicio</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Grid>
                    {datos.map(
                            (dato)=>(
                                <Grid item   xs={12} sm={6} lg={4} > 
                <Box xs={4} ml="5%" mr="5%" mt="3%" textAlign="center" boxShadow={3} bgcolor="white" border={2} borderRadius={16} borderColor="white" p={{xs:2, sm:3, md:5}}>
                    <img width={300} height={300} src={dato.imagen} alt=""/><br></br>
                    <h3>
                        <Link to="/InfoEvento">
                            <Button align="center" size="large" variant="outlined" color="primary">Información</Button>
                        </Link>
                    </h3>
                </Box>
            </Grid>
                                 
                            )
                        )}
                </Grid>
            </div>
            );

    }

       
}

export default Usuario; 



    