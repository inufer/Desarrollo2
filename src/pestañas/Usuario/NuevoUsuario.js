import React from 'react';
import {Fragment, useState} from 'react';
import './NuevoUsuario.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {Box, FormControlLabel, Grid, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight: '100vh'
    },
}));




function NuevoUsuario(props){

    const [datos, setDatos] = useState (
        {
            txtNombreRegristro: '',
            txtApellidosRegistro: '',
            txtCedulaRegistro: '',
            txtEdadRegistro: '',
            txtCorreoRegistro: '',
            txtNickRegistro: '',
            txtContraseñaRegistro: ''
    
        }
    )

    const handleInputChange = (event) =>{
        console.log(event.target.value)
        setDatos(
        {
            ...datos,
            [event.target.id] : event.target.value
        })
    }
    const classes = useStyles();
    return(
        <div>
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className={classes.root}   style={{backgroundColor:"#fff176"}}>
                    <Grid item xs={12} md={6}>
                        <Box ml="15%" mt="5%" mr="15%" textAlign="center" boxShadow={3} bgcolor="white" border={2} borderRadius={16} borderColor="white" p={{xs:2, sm:3, md:5}}>
                            <label textAlign="center" id="label1"> Label pal logo</label>
                            <br></br><br></br>
                            <label id="label2"> Te damos la bienvenida</label>
                            <br></br><br></br><br></br><br></br>
                            <label textAlign="left" id="label1"> Nombres </label>
                            <br></br><br></br>
                            <TextField  fullWidth onChange={handleInputChange} id="txtNombreRegristro" label="Nombre" variant="filled" />
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Apellidos </label>
                            <br></br><br></br>
                            <TextField  fullWidth onChange={handleInputChange} id="txtApellidosRegistro" label="Apellido" variant="filled" />
                            <br></br><br></br>
                            <h3>{datos.txtNombreRegristro} - {datos.txtApellidosRegistro}</h3>

                            <label textAlign="left" id="label1"> Cedula </label>
                            <br></br><br></br>
                            <TextField  fullWidth onChange={handleInputChange} id="txtCedulaRegistro" label="Cedula" variant="filled" />
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Edad </label>
                            <br></br><br></br>
                            <TextField  fullWidth onChange={handleInputChange} id="txtEdadRegistro" label="Edad" variant="filled" />
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Correo Electronico </label>
                            <br></br><br></br>
                            <TextField  fullWidth onChange={handleInputChange} id="txtCorreoRegistro" label="Correo" variant="filled" />
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Nick </label>
                            <br></br><br></br>
                            <TextField  fullWidth onChange={handleInputChange} id="txtNickRegistro" label="Nick" variant="filled" />
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Contraseña </label>
                            <br></br><br></br>
                            <TextField  fullWidth onChange={handleInputChange} id="txtContraseñaRegistro" label="Contraseña" variant="filled" />
                            <br></br><br></br>
                            <Link to="/">
                                <Button align="center" size="large" variant="outlined" color="primary">Registrarse</Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={0} md={4} >
                        <img mt={"20%"} width={300} height={300} src="/imagenes/rock.jpg" alt=""/>
                    </Grid>
                </Grid>            

        </div>

    );
}

export default NuevoUsuario;