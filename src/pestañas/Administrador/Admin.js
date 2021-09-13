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

const useStyles = makeStyles((theme) => ({
    appbar:{
        backgroundColor: '#fff176'
    },
    root:{
        minHeight: '100vh'
    },
    contenedorEventos:{
        backgroundColor: 'green'
    },
    fondoPresentacion: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/imagenes/volley.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        color:'BLACK',
        flexGrow: 1,
      }
}));

function Admin(props){
    const classes = useStyles();
    
        return(
            <div>
                <Grid container direction="row"  className={classes.root}  style={{backgroundColor:"#37474f"}}>
                    <Grid item xs={12}>
                        <AppBar className={classes.appbar} position="static">
                            <Toolbar>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                </IconButton>
                                <Typography variant="h6" className={classes.title}>
                                Pal logo
                                </Typography>
                                <Link to="/Perfil">
                                    <Button color="black">Perfil</Button>
                                </Link>
                                <Link to="/">
                                    <Button color="black">Salir</Button>
                                </Link>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Grid item   xs={12} sm={6} lg={4} >
                        <Box xs={4} ml="5%" mr="5%" mt="3%" textAlign="center" boxShadow={3} bgcolor="white" border={2} borderRadius={16} borderColor="white" p={{xs:2, sm:3, md:5}}>
                            <img width={300} height={300} src="/imagenes/rock.jpg" alt=""/>
                            <h3>
                                Aforo total = 100
                                <br></br>
                                <br></br>
                                <Link to="/EditarEvento">
                                    <Button align="center" size="large" variant="outlined" color="primary">Editar</Button>
                                </Link>
                                <Button align="center" size="large" variant="outlined" color="primary">Eliminar</Button>
                            </h3> 
                        </Box>
                    </Grid>   
                    <Grid item   xs={12} sm={6} lg={4} > 
                        <Box xs={4} ml="5%" mr="5%" mt="3%" textAlign="center" boxShadow={3} bgcolor="white" border={2} borderRadius={16} borderColor="white" p={{xs:2, sm:3, md:5}}>
                            <img width={300} height={300} src="/imagenes/piano.png" alt=""/>
                            <h3>
                                Aforo total = 100
                                <br></br>
                                <br></br>
                                <Link to="/EditarEvento">
                                    <Button align="center" size="large" variant="outlined" color="primary">Editar</Button>
                                </Link>
                                <Button align="center" size="large" variant="outlined" color="primary">Eliminar</Button>
                                </h3> 
                        </Box>
                    </Grid>
                    <Grid item   xs={12} sm={6} lg={4}> 
                        <Box ml="5%" mr="5%" mt="3%"  textAlign="center" boxShadow={3} bgcolor="white" border={2} borderRadius={16} borderColor="white" p={{xs:2, sm:3, md:5}}>
                            <img width={300} height={300}  src="/imagenes/deporte.png" alt=""/> 
                            <h3>
                            Aforo total = 100
                                <br></br>
                                <br></br>
                                <Link to="/EditarEvento">
                                    <Button align="center" size="large" variant="outlined" color="primary">Editar</Button>
                                </Link>
                                <Button align="center" size="large" variant="outlined" color="primary">Eliminar</Button>
                                </h3> 
                        </Box>
                    </Grid>
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


export default Admin;