import React from 'react';
import { Link } from 'react-router-dom';
import {Box, FormControlLabel, Grid, TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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

function InfoEvento(props){
    const classes = useStyles();

    return(
        <div >
                <Grid container direction="row"  className={classes.root}   style={{backgroundColor:"#37474f"}}>
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
                    <Grid item   xs={12} sm={4} >
                        <Box xs={4} ml="5%" mr="5%" mt="10%" textAlign="center" boxShadow={3} bgcolor="white" borderRadius={16} borderColor="white" p={{xs:1, sm:1, md:2}}>
                            <img width={300} height={300} src="/imagenes/rock.jpg" alt=""/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Box ml="5%" mt="5%" mr="5%" textAlign="rigth" boxShadow={3} bgcolor="white" border={2} borderRadius={16} borderColor="white" p={{xs:2, sm:3, md:5}}>
                            <label textAlign="center" id="label1"> Label pal logo</label>
                            <br></br><br></br>
                            <label id="label2"> Nombre del evento</label>
                            <br></br><br></br><br></br><br></br>
                            <label textAlign="left" id="label1"> Nombre </label>
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Descipción </label>
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Estado </label>
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Aforo </label>
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Precio </label>
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Dirección </label>
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Tel contacto </label>
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Correo contacto </label>
                            <br></br><br></br>
                            <Button align="center" size="large" variant="outlined" color="primary">Comprar</Button>
                            <Link to="/Usuario">
                                <Button align="center" size="large" variant="outlined" color="primary">Regresar</Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
        </div>
    );
}

export default InfoEvento;