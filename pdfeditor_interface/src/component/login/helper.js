import React from "react";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { getAuthToken } from '../../utils';
import { showToast } from '../../index';


export const getLoginFormFields = passwordClickHandler => ({
    username: {
        name: "UserName",
        icon: <PersonOutlineIcon color="primary" />,
        type: "text"
    },
    password: {
        name: "Password",
        icon: <LockIcon color="primary" />,
        type: "password",
        icon_1: <VisibilityIcon color="primary" onClick={passwordClickHandler}/>,
        icon_2: <VisibilityOffIcon color="primary" onClick={passwordClickHandler} />
    }
})

export const getInputProps = (key,formFields,showIconOne) => {
    switch(key){
        case "password":
            return showIconOne ? {
                startAdornment: formFields[key].icon,
                endAdornment: formFields[key].icon_1
            } : {
                startAdornment: formFields[key].icon,
                endAdornment: formFields[key].icon_2
            }
        default:
            return {
                startAdornment: formFields[key].icon
            }
    }
}

export const validateUser = async (userName,password) => {
    const isValid = await getAuthToken(userName,password);
    if(!isValid)
        showToast({
            type: "error",
            message: "Invalid UserName/Password"
        });
    return isValid;
}

export const setUser = data => ({
    type: "USERINFO",
    payload:{
        userInfo: data
    }
})