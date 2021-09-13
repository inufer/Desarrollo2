import React from 'react';
import { Link } from 'react-router-dom';
import {Box, FormControlLabel, Grid, TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    appbar:
    {
        backgroundColor: '#fff176'
    },
    root:
    {
        minHeight: '100vh'
    },
    contenedorEventos:
    {
        backgroundColor: 'green'
    },
    fondoPresentacion: 
    {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/imagenes/volley.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    menuButton: 
    {
        marginRight: theme.spacing(2),
    },
    title: 
    {
        color:'BLACK',
        flexGrow: 1,
    },
    labels: 
    {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    textField: 
    {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
        },
}));


function Perfil(props){
    const classes = useStyles();

    let variable = true
    let adminONo
    if (variable)
    {
        adminONo = "Admin"
    }
    else
    {
        adminONo = "Usuario"
    }
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
                                <Button color="black">Perfil</Button>
                                <Link to="/">
                                    <Button color="black">Salir</Button>
                                </Link>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                    <Grid item xs={12} direction="row">
                    <Box display="flex" flexWrap="wrap" ml="5%" mt="5%" mr="5%" textAlign="Left" boxShadow={3} bgcolor="white" border={2} borderRadius={16} borderColor="white" p={{xs:2, sm:3, md:5}}>
                            
                            <Grid item xs={12}>
                                <label textAlign="center" id="label1"> Label pal logo</label>
                            </Grid>
                            <br></br><br></br>
                            <Grid item xs={12} >
                            <label textAlign="center" id="label1"> Label pal cargo</label>
                            </Grid>
                            <br></br><br></br><br></br>

                            <Grid Item xs={12} md={6} direction="row">
                                <Box mr="5%" ml="5%">
                                    <label className={classes.labels} textAlign="left" id="label1"> Nombres </label>
                                    <br></br><br></br>
                                    <TextField fullWidth className={classes.textField} id="txtNombresPerfil" label="Nombre" variant="filled" />
                                    <br></br><br></br>
                                </Box>
                            </Grid>

                            <Grid Item xs={12} md={6} directio="row">
                                <Box mr="5%" ml="5%">
                                    <label textAlign="left" id="label1"> Apellidos </label>
                                    <br></br><br></br>
                                    <TextField fullWidth className={classes.textField} id="txtApellidosPerfil" label="Apellido" variant="filled" />
                                    <br></br><br></br>
                                </Box>
                            </Grid>
                            <Grid Item xs={12} md={6} directio="row">
                                <Box mr="5%" ml="5%">
                                    <label textAlign="left" id="label1"> Cedula </label>
                                    <br></br><br></br>
                                    <TextField  className={classes.textField} fullWidth id="txtCedulaPerfil" label="Cedula" variant="filled" />
                                    <br></br><br></br>
                                </Box>
                            </Grid>
                            <Grid Item xs={12} md={6} directio="row">
                                <Box mr="5%" ml="5%">
                                    <label textAlign="left" id="label1"> Edad </label>
                                    <br></br><br></br>
                                    <TextField className={classes.textField} fullWidth id="txtNickPerfil" label="Usuario" variant="filled" />
                                    <br></br><br></br>
                                </Box>
                            </Grid>
                            
                            <Grid Item xs={12} md={6} directio="row">
                                <Box mr="5%" ml="5%">
                                <label textAlign="left" id="label1"> Correo Electronico </label>
                                    <br></br><br></br>
                                    <TextField  className={classes.textField} fullWidth id="txtEdadPerfil" label="Edad" variant="filled" />
                                    <br></br><br></br>
                                </Box>
                            </Grid>

                            <Grid Item xs={12} md={6} directio="row">
                                <Box mr="5%" ml="5%">
                                <label textAlign="left" id="label1"> Nick </label>
                                    <br></br><br></br>
                                    <TextField  className={classes.textField} fullWidth id="txtEdadPerfil" label="Edad" variant="filled" />
                                    <br></br><br></br>
                                </Box>
                            </Grid>

                            <Grid Item xs={12} md={6} directio="row">
                                <Box mr="5%" ml="5%">
                                    <label textAlign="left" id="label1"> Contraseña </label>
                                    <br></br><br></br>
                                    <TextField  className={classes.textField} fullWidth id="txtContraseñaPerfil" label="Usuario" variant="filled" />
                                    <br></br><br></br>
                                </Box>
                            </Grid>

                            <Grid Item xs={12} directio="row">
                                <Box mr="5%" ml="5%" mt="5%">
                                    <Link to={"/"+adminONo}>
                                        <Button align="center" size="large" variant="outlined" color="primary">Confirmar Cambios</Button>
                                    </Link>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
        </div>

    );
}

export default Perfil;