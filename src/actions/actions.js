import * as type from './ActionType';

export function addUser(numero,nom,email,address,password){
    return {type:type.ADD_USER, payload:{numero:numero,nom:nom,email:email,address:address,password:password}}
}

export function deleteUser(numero){
    return {type:type.DELETE_USER, payload:numero}
}

export function updateUser(numero,nom,email,address,password){
    return {type:type.UPDATE_USER, payload:{numero:numero,nom:nom,email:email,address:address ,password:password}}
}