import { shallow } from 'enzyme'
import {getUsuarioById} from '../../src/pestañas/router/consultabd'

describe('Prueba simulando tiempos consulta bd', ()=>{

    test('Testear consulta a bd',(done) =>{
        const cedulaUsuario = 123456
        getUsuarioById(cedulaUsuario).then( NuevoUsuario => {
            expect(NuevoUsuario.cedulaUsuario).toBe(123456)
            done()
        })
    
    })
})

