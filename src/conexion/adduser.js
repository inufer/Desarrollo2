import express from 'express';


const app = express();
const port = 5500;
const router = express.Router();

//middleware 

app.use(express.json());
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(router);

app.listen(port, ()=>{
    console.log(`Server is running in http://localhost:${port}`);
})


router.get('/user', (req, res)=>{
    res.json(req.body)
    console.log('Respuesta enviada')
})



router.post('/user', (req, res)=>{
    const {apellidoUsuario,cedulaUsuario,contraseñaUsuario,emailUsuario,nombreUsuario} = req.body;
    console.log(nombreUsuario);
    res.json(req.body)
})


