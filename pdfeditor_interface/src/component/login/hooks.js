import { useReducer } from "react";

const initialLoginState = {
    username: "",
    password: "",
    showPassword: false,
    error: false
}

const reducerAction = (state,action) => {
    const {type,payload} = action;
    switch(type){
        case "username":
            return {...state,username: payload.username};
        case "password":
            return {...state,password: payload.password};
        case "showPassword":
            return {...state,showPassword: payload.showPassword};
        case "error":
            return {...state,error: payload.error};
        default:
            return state;
    }
}

const useLoginCredentials = () => {
    const [loginCredentials,dispatch] = useReducer(reducerAction,initialLoginState);

    return{loginCredentials,dispatch};
}

export default useLoginCredentials;