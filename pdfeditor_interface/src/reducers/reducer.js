const initialState = {
    user: {
        firstName: "",
        lastName: "",
        email: ""
    }
}

const reducer = (state = initialState,action = {}) => {
    const {type,payload} = action;
    switch(type){
        case "USERINFO":
            return {...state,user: payload.userInfo};
        default:
            return state;
    }
}

export default reducer;