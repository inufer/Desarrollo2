
import NuevoUsuario from './../Usuario/NuevoUsuario';



const getUsuariobaseById = (cedulaUsuario) => NuevoUsuario.state( (User) => NuevoUsuario.state.cedulaUsuario === cedulaUsuario);

export const getUsuarioById = (cedulaUsuario) => {
    return new Promise( (resolve, reject) => {
       setTimeout(() => {
           const pers = getUsuariobaseById(cedulaUsuario)
           if(pers){
               resolve(pers)
           }else{
               reject('No lo encontro')
           }
       },2500)
    })
} 

