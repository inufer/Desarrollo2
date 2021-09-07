import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {Box, Grid, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight: '100vh'
    },
    fondoPresentacion: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/imagenes/volley.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
}));

function Inicio(props){
    const classes = useStyles();
    return(
        <div>
            <Grid container className={classes.root}>
                <Grid container className={classes.root} direction="column" justify="center" alignItems="center" item xs={12} md={4} style={{backgroundColor:"skyblue"}}>
                    <label id="label1"> INGRESE SUS DATOS</label>
                    <br></br><br></br>
                    <TextField id="txt-usuario" label="Usuario" variant="filled" />
                    <br></br><br></br>
                    <TextField id="txt-contraseña" label="Contraseña" variant="filled" />
                    <br></br><br></br><br></br><br></br>
                    <Link to="/Admin">
                        <Button align="center" size="large" variant="outlined" color="primary">Ingresar</Button>
                    </Link>
                    <br></br><br></br>
                    <Link to="NuevoUsuario">
                        <Button align="center" size="large" variant="outlined" color="primary">Registrarse</Button>
                    </Link>
                    <br></br><br></br>
                </Grid>

                <Grid container className={classes.fondoPresentacion } item xs={0} md={8} style={{backgroundColor:"blue"}}>

                </Grid>
            </Grid>
        </div>

    );
}


export default Inicio;