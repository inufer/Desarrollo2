import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {Box, FormControlLabel, Grid, TextField} from '@material-ui/core';
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
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className={classes.root}   style={{backgroundColor:"yellow"}}>
                    <Grid item xs={12} sm={6} >
                        <Box ml="15%" mt="5%" textAlign="center" boxShadow={3} bgcolor="white" border={2} borderRadius={16} borderColor="white" p={{xs:2, sm:3, md:5}}>
                        <label id="label1"> Label pal logo</label>
                        <br></br><br></br>
                        <label id="label2"> Te damos la bienvenida</label>
                        <br></br><br></br><br></br><br></br>
                        <label id="label1"> Nombre</label>
                        <br></br><br></br>
                        <TextField fullWidth id="txt-usuario" label="Usuario" variant="filled" />
                        <br></br><br></br>
                        <label id="label1"> Contraseña</label>
                        <br></br><br></br>
                        <TextField fullWidth id="txt-contraseña" label="Contraseña" variant="filled" />
                        <br></br><br></br><br></br><br></br>
                        <Link to="/Admin">
                            <Button align="center" size="large" variant="outlined" color="primary">Ingresar</Button>
                        </Link>
                        <br></br><br></br>
                        <Link to="NuevoUsuario">
                            <Button align="center" size="large" variant="outlined" color="primary">Registrarse</Button>
                        </Link>
                        <br></br><br></br>
                        </Box>
                    </Grid>
                    <Grid item xs={0} sm={4} >
                        <img mt={"20%"} width={300} height={300} src="/imagenes/rock.jpg" alt=""/>
                    </Grid>
                </Grid>
            
        </div>

    );
}


export default Inicio;