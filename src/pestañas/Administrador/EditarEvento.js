import React from 'react';
import { Link } from 'react-router-dom';
import {Box, FormControlLabel, Grid, TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';




class EditarEvento extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            datosCargados:false,
            dato:[]
        }
    }

    cambioValor = (e) => {
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({dato:state});
    }

    enviarDatos = (e) =>{
        e.preventDefault();
        console.log("Enviado");
        const{ 
            id_evento,
            nombre,
            descripcion,
            estado,
            disponibilidad,
            direccion,
            tel_contacto,
            correo_contacto,
            Precio,
            imagen
            
        }=this.state.dato
        var datosEnviar={
            nombre:nombre,
            descripcion:descripcion,
            estado:estado,
            disponibilidad:disponibilidad,
            direccion:direccion,
            tel_contacto:tel_contacto,
            correo_contacto:correo_contacto,
            Precio:Precio,
            imagen:imagen
            
        }
        fetch("http://localhost/eventochoclo/eventos/?actualizar",
            {method:"POST", 
            body:JSON.stringify(datosEnviar)})
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {this.props.history.push=("/")})

    }

    

    cargarDatos(){
        console.log(this.props.match.params.id);
        console.log("hola");
        fetch("http://localhost/eventochoclo/eventos/?consultar="+this.props.match.params.id)
       .then(respuesta=>respuesta.json())
       .then((datosRespuesta)=>{
           console.log(datosRespuesta);
           this.setState({datosCargados:true, dato:datosRespuesta[0]})
        })
       .catch(console.log)
    }

    
    
    componentDidMount(){
       this.cargarDatos();

       
    }

    render(){
        const{datosCargados, dato}=this.state

        return(

        <div >
                <Grid container direction="row"     style={{backgroundColor:"#37474f"}}>
                <Grid item xs={12}>
                        <AppBar style={{backgroundColor:"#fff176"}} position="static">
                            <Toolbar>
                                <IconButton edge="start"  color="inherit" aria-label="menu">
                                </IconButton>
                                <Typography variant="h6" >
                                <img width={"5%"} height={"5%"} src="src\assets\images\imagen_logo_sintexto.png" alt=""/>
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
                            <img width={300} height={300} src={dato.imagen} alt=""/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Box ml="5%" mt="5%" mr="5%" textAlign="rigth" boxShadow={3} bgcolor="white" border={2} borderRadius={16} borderColor="white" p={{xs:2, sm:3, md:5}}>
                            <label textAlign="center" id="label1"> Label pal logo</label>
                            <br></br><br></br>
                            {dato.nombre}
                            <label id="label2"> </label>
                            <br></br><br></br><br></br><br></br>
                            <label textAlign="left" id="label1"> Nombre </label>
                            <br></br><br></br>
                            <TextField  fullWidth id="txtNombreEvento"  variant="filled" value={dato.nombre}   onChange={this.cambioValor}/>
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Descipción </label>
                            <br></br><br></br>
                            <TextField  fullWidth id="txtDescripcionEvento" value={dato.descripcion} variant="filled" onChange={this.cambioValor}/>
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Estado (Pendiente, en progreso, finalizado) </label>
                            <br></br><br></br>
                            <TextField  fullWidth id="txtEstadoEvento" value={dato.estado} variant="filled" onChange={this.cambioValor}/>
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Aforo (Cantidad de entradas) </label>
                            <br></br><br></br>
                            <TextField  fullWidth id="txtAforoEvento" value={dato.disponibilidad} variant="filled" onChange={this.cambioValor}/>
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Precio (Por entrada) </label>
                            <br></br><br></br>
                            <TextField  fullWidth id="txtPrecioEvento" value={dato.precio} variant="filled" onChange={this.cambioValor}/>
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Dirección </label>
                            <br></br><br></br>
                            <TextField  fullWidth id="txtDireecionEvento" value={dato.direccion} variant="filled" onChange={this.cambioValor}/>
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Tel contacto </label>
                            <br></br><br></br>
                            <TextField  fullWidth id="txtTelefonoEvento" value={dato.tel_contacto} variant="filled" onChange={this.cambioValor}/>
                            <br></br><br></br>
                            <label textAlign="left" id="label1"> Correo contacto </label>
                            <br></br><br></br>
                            <TextField  fullWidth id="txtCorreoEvento" value={dato.correo_contacto} variant="filled" onChange={this.cambioValor}/>
                            <br></br><br></br>
                            <Button align="center" size="large" variant="outlined" color="primary" onClick={this.enviarDatos}>Aceptar cambios</Button>
                            <Link to="/Admin">
                                <Button align="center" size="large" variant="outlined" color="primary">Regresar</Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
        </div>
    );
    }
    
}

export default EditarEvento;