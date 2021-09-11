import React from 'react';
import './NuevoUsuario.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Box, FormControlLabel, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh'
    },
}));


function NuevoUsuario(props, handleChange) {



    const classes = useStyles();

    let contador = 0;

    let miUsuario = {
        id: contador,
        nombre: '',
        apellido: '',
        cedula: '',
        edad: '',
        email: '',
        contraseña: ''
    };




    return (
        <div >
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className={classes.root} style={{ backgroundColor: "#fff176" }}>
                <Grid item xs={12} sm={6}>
                    <Box ml="15%" mt="5%" textAlign="center" boxShadow={3} bgcolor="white" border={2} borderRadius={16} borderColor="white" p={{ xs: 2, sm: 3, md: 5 }}>

                        <label textAlign="center" id="label1"> Label pal logo</label>

                        <label id="label2"> Te damos la bienvenida</label>

                        <label textAlign="left" for="nombreUsuario" id="labelNombre"> Nombre </label>
                        <TextField fullWidth id="nombreUsuario" label="" variant="filled" />

                        <label textAlign="left" for="apellidoUsuario" id="labelApellido"> Apellido </label>
                        <TextField fullWidth id="apellidoUsuario" label="" variant="filled" />

                        <label textAlign="left" for="cedulaUsuario" id="labelCedula"> Cédula </label>
                        <TextField fullWidth id="cedulaUsuario" label="" variant="filled" />

                        <label textAlign="left" for="edadUsuario" id="labelEdad"> Edad </label>
                        <TextField fullWidth id="edadUsuario" label="" variant="filled" />

                        <label textAlign="left" for="emailUsuario" id="labelEmail"> Correo Electronico </label>
                        <TextField fullWidth id="emailUsuario" label="" variant="filled" />

                        <label textAlign="left" for="contraseñaUsuario" id="labelContraseña"> Contraseña </label>
                        <TextField fullWidth id="contraseñaUsuario" label="" variant="filled" />

                        <Button align="center" size="large" variant="outlined" color="primary" onClick={() => { miUsuario.nombre = document.getElementById('nombreUsuario').value; console.log(miUsuario) }}>Registrarse</Button>


                    </Box>
                </Grid>
                <Grid item xs={0} sm={4} >
                    <img mt={"20%"} width={300} height={300} src="/imagenes/rock.jpg" alt="" />
                </Grid>
            </Grid>

        </div>

    );
}

export default NuevoUsuario;