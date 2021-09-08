const { Pool } = require('pg');
const Router = require('express-promise-router');
const keys = require('../config/keys');


const pool = new Pool({
  connectionString: keys.posgresqlURI,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect();

const router = new Router();
// export our router to be mounted by the parent application
module.exports = router;


router.post('/insertarusuario', async (req, res) => {
    const { nombre, apellido, cedula, edad, correo_electronico, nick, contraseña } = req.body;
    console.log(req.body)
    await pool.query(
      `INSERT INTO usuario(nombre, apellido, cedula, edad, correo_electronico, nick, contraseña ) 
      VALUES('${nombre}','${apellido}','${cedula}','${edad}','${correo_electronico}','${nick}','${contraseña}')`
    );
    res.send({ 'RES': 'INSERTADO' });
  });
  