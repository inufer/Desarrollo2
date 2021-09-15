import { shallow } from 'enzyme'
import {getUsuarioById} from '../../src/pestañas/router/consultabd'

describe('Prueba simulando tiempos consulta bd', ()=>{

    test('Testear consulta a bd; Agregar cedula',(done) =>{
        const cedulaUsuario = 123456
        getUsuarioById(cedulaUsuario,[{
            nombreUsuario: '',
            apellidoUsuario: '',
            cedulaUsuario: 123456,
            emailUsuario: '',
            contrasenaUsuario: '',
    
        }]).then( NuevoUsuario => {
            expect(NuevoUsuario.cedulaUsuario).toBe(123456)
            done()
        })
    
    })
})

