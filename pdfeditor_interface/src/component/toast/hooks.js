import { useReducer } from "react";

const initialState = {
    toast: [],
    autoClose: 1500
}

const reducer = (state,action) => {
    const { type,payload } = action;
    switch(type){
        case "TOAST":
            return {...state, toast: payload.toast};
        case "AUTO_CLOSE":
            return { ...state, autoClose: payload.autoClose};
        default:
            return state;
    }
}

const useToast = () => {
    const [toastState,dispatch] = useReducer(reducer,initialState);

    return {
        toastState,
        dispatch
    }
}

export default useToast;

