import * as type from './ActionType';

const initState={
    users:[],
    currentUser:[]
}

export function reducerAction(state=initState,action){
    switch (action.type) {
        case type.ADD_USER:
            return {...state, users:[...state.users, action.payload]}

        case type.DELETE_USER:
            return {...state, users:state.users.filter(user=>user.numero!==action.payload)}

        case type.UPDATE_USER:
            return {...state, users:state.users.map(user=>{
                if(user.numero!==action.payload.numero){
                    return {...user}
                }else{
                    const {nom,email,address}=action.payload;
                    return {...user, nom:nom,email:email,address:address}
                }
            })};
        
    }
}