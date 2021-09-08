import React from 'react';
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
    const classes = useStyles();
    return(
        <div >
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className={classes.root}   style={{backgroundColor:"yellow"}}>
                    <Grid item xs={12} sm={6}>
                        <Box ml="15%" mt="5%" textAlign="center" boxShadow={3} bgcolor="white" border={2} borderRadius={16} borderColor="white" p={{xs:2, sm:3, md:5}}>
                            <label textAlign="center" id="label1"> Label pal logo</label>
                            <br></br><br></br>
                            <label id="label2"> Te damos la bienvenida</label>
                            <br></br><br></br><br></br><br></br>
                            <label textAlign="left" id="label1"> Nombre </label>
                            <br></br><br></br>
                            <TextField  fullWidth id="txt-usuario" label="Nombre" variant="filled" />
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Apellido </label>
                            <br></br><br></br>
                            <TextField  fullWidth id="txt-usuario" label="Apellido" variant="filled" />
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Cedula </label>
                            <br></br><br></br>
                            <TextField  fullWidth id="txt-usuario" label="Cedula" variant="filled" />
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Edad </label>
                            <br></br><br></br>
                            <TextField  fullWidth id="txt-usuario" label="Edad" variant="filled" />
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Correo Electronico </label>
                            <br></br><br></br>
                            <TextField  fullWidth id="txt-usuario" label="Usuario" variant="filled" />
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Nick </label>
                            <br></br><br></br>
                            <TextField  fullWidth id="txt-usuario" label="Usuario" variant="filled" />
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Contraseña </label>
                            <br></br><br></br>
                            <TextField  fullWidth id="txt-usuario" label="Usuario" variant="filled" />
                            <br></br><br></br>
                            <Link to="/">
                                <Button align="center" size="large" variant="outlined" color="primary">Registrarse</Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={0} sm={4} >
                        <img mt={"20%"} width={300} height={300} src="/imagenes/rock.jpg" alt=""/>
                    </Grid>
                </Grid>            

        </div>

    );
}

export default NuevoUsuario;