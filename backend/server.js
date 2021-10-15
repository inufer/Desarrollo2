const express = require('express');
const { Pool } = require('pg');




const conexionProduccion = {
    host: 'chunee.db.elephantsql.com',
    user: 'yemaaibm',
    password: 'cVPVTZjKvtS4m_vq7nowA3mSqLuICfmN',
    port: 5432,
    database: 'yemaaibm'
};

const conexionLocal = {
    host: 'localhost',
    user: 'postgres',
    password: '',
    port: 5432,
    database: 'EventoChoclo'
};

//Se hace la conexion a la base de datos

const pool = new Pool(conexionLocal);

const router = express.Router();

var app = express();
// app.use(bodyParser.json);
// middlewares
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(express.json());
app.use(router);


/* router.get('/',function(req,res){
    res.send("Main directory");
});
router.post('/',(req,res)=>{
    console.log(req.query);
    console.log(req.body);
    res.send("Hola desde post");
}) */


router.get('/users',async function(req,res){
    try{
        let result = await pool.query("select * from users");
        res.status(200).json({
            sucessfully: true,
            data: result.rows
        });
    }catch(error){
        res.status(500).json({
            sucessfully: false,
            message: "Se produjo un error inesperado"
        })
    }
});
router.get('/users/:id',async function(req,res){
    try{
        const id = parseInt(req.params.id);
        let result = await pool.query("select * from users where user_id = $1",[id]);
        res.status(200).json({
            sucessfully: true,
            data: result.rows
        });
    }catch(error){
        res.status(500).json({
            sucessfully: false,
            message: "Se produjo un error inesperado"
        })
    }
});
router.post('/users',async function(req,res){
    const { nombreUsuario, apellidoUsuario, cedulaUsuario, emailUsuario, contrasenaUsuario } = req.body;
    // tener cuidado con el orden, debe coincidir con las del query de mas abajo, en las posiciones $1,$2,$3....
    const dataInsert = [
        emailUsuario,
        contrasenaUsuario,
        nombreUsuario,
        apellidoUsuario,
        cedulaUsuario
    ];
    // try{
        const result = await pool.query(
            'insert into users(user_email,user_pass,user_name,user_lastname,user_dni) values ($1,$2,$3,$4,$5)',
            dataInsert
        );
        res.status(200).json({
            sucessfully: true,
            message: "Usuario creado exitosamente",
            user: dataInsert
        })
    // }catch(error){
    //     res.status(500).json({
    //         sucessfully: false,
    //         message: "Se produjo un error inesperado"
    //     });
    // }
});

router.put('/users/:id',async function(req,res){
    try{
        const id = parseInt(req.params.id);
        let request = req.body;
        // las llaver de map hacen referencia a como vienen los campos, o el body desde el frontend y el value hace referencia a como se llama el campo en la base de datos.
        const map = { // mapeo de nombres entre frontend y base de datos
            "nombreUsuario": "user_name",
            "apellidoUsuario": "user_lastname",
            "cedulaUsuario" : "user_dni",
            "emailUsuario" : "user_email",
            "contrasenaUsuario": "user_pass"
        }
        let aux = 0;
        let dataUpdate = [];
        let sql = "update users set ";
        let lengthRequest = Object.keys(request).length;
        // console.log(request);
        // console.log(lengthRequest);
        for (const variable in request) {
            if(request[variable] != undefined && request[variable] != null){
                aux++;
                sql += " "+map[variable]+" = $"+aux;
                if(lengthRequest != aux){
                    sql+=",";
                }
                dataUpdate.push(request[variable]);
            }
        }
        if(aux > 0){ //ejecuto consulta si mandaron datos

        }
        aux++;
        sql += " where user_id = $"+aux;
        dataUpdate.push(id);
        // console.log(sql,dataUpdate);
        const result = await pool.query(sql,dataUpdate);
        // console.log(result);
        if(result.hasOwnProperty("rowCount")){ // busca en la respuesta result, si existe una propiedad llamada rowCount, es igual a 1 si afecto alguna linea e igual a 0 si no encontro nada.
            if(result.rowCount > 0){ // si actualizo usuario, rowCount > 0
                res.status(200).json({
                    sucessfully: true,
                    message: "usuario "+id+" fue actualizado."
                });
            }else{ // no actualizo usuario, rowCount = 0
                res.status(200).json({
                    sucessfully: false,
                    message: "usuario "+id+" no encontrado."
                });
            }
        }else{ // propiedad rowCount no existe el query no se ejecuto o no respondio
            res.status(200).json({
                sucessfully: false,
                message: "Ocurrio un error al intentar actualizar usuario"
            });
        }
    }catch(error){
        res.status(500).json({
            sucessfully: false,
            message: "Se produjo un error inesperado"
        });
    }
});
router.delete('/users/:id',async function(req,res){
    const id = parseInt(req.params.id);
    try{
        let result = await pool.query("delete from users where user_id = $1",[id]);
        // console.log(result);
        if(result.hasOwnProperty("rowCount")){ // busca en la respuesta result, si existe una propiedad llamada rowCount, es igual a 1 si afecto alguna linea e igual a 0 si no encontro nada.
            if(result.rowCount > 0){ // si elimino usuario, rowCount > 0
                res.status(200).json({
                    sucessfully: true,
                    message: "usuario "+id+" fue eliminado."
                });
            }else{ // si no elimino usuario, rowCount = 0
                res.status(200).json({
                    sucessfully: false,
                    message: "usuario "+id+" no encontrado."
                });
            }
        }else{ // propiedad rowCount no existe el query no se ejecuto o no respondio
            res.status(200).json({
                sucessfully: false,
                message: "Ocurrio un error al intentar eliminar usuario"
            });
        }
    }catch(error){
        res.status(500).json({
            sucessfully: false,
            message: "Se produjo un error inesperado"
        });
    }
});

//ingresar (inicio de sesión)

router.post('/user/authenticate', async function (req, res){
    const emailUsuario= req.body.emailUsuario;
    const passUsuario = req.body.passUsuario;

    // try{
        const user = await pool.query(`SELECT * FROM users WHERE user_email='${emailUsuario}'`)
        const pass_bd = user.rows[0].user_pass;

        console.log(user.rows[0].user_pass )
        console.log(passUsuario)
    
        if(passUsuario == pass_bd){
            res.status(200).json({
                sucessfully: true,
                message: "Usuario autenticado exitosamente",
                perfil: user.rows[0].user_unique,
                token: Buffer.from(user.rows[0].user_email).toString('base64')
                
            })
        } else{
            res.status(200).json({
                sucessfully: false,
                message: "No se pudo autenticar"
                
            })
            
        }    
    // } catch(error){
    //     res.status(500).json({
    //         sucessfully: false,
    //         message: "Error",
    //     })
    // }

});

// async function authenticate( email, password ) {
//     const user = await pool.query(`SELECT * FROM users WHERE user_email=${email}`)
//     console.log(user);
//     if(user.user_pass == password){
//         console.log("Ingreso satisfactorio");
//     }
// }


app.listen(5500);
console.log("La app esta escuchando en el puerto 5500");








