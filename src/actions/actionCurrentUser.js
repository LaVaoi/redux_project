import *as type from './typeActionCureentUser';

export function login(email,nom,numero,address){
    return {type:type.LOGIN, payload:{email:email,nom:nom,numero:numero,address:address}}
}

export function logout(){
    return{type:type.LOGOUT}
}