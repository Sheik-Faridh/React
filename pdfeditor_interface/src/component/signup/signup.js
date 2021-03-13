import React, { useState,useMemo,useCallback } from 'react';
import { Card,CardContent,CardActions,TextField,Button,Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useSignUpCredentials from './hooks';
import CircularProgress from "@material-ui/core/CircularProgress";
import { getSignUpFormFields,getInputProps,toggleIcon } from './helper';
import { showToast } from '../../index';
import useStyles from '../login/styles';
import useStyledInput from '../styled/input';
import LOGO from '../../assets/img/logo-spi-global.png';
import { createUserData } from '../../utils';

const SignUp = () => {
    //custom hook for login credentials
    const {signUpCredentials,dispatch} = useSignUpCredentials();
    const styleElem = useStyles();
    const inputStyle = useStyledInput();
    const history = useHistory();
    const [loading,setLoading] = useState(false);
    const {
        firstName,
        lastName,
        username,
        password,
        showPassword,
        confirmPassword,
        error
    } = signUpCredentials;  

    const togglePassword =  useCallback(
        e => {
            e.preventDefault();
            dispatch({
                type:"showPassword",
                payload:{
                    showPassword: !showPassword
                }
            })
        },
        [showPassword]
    )

    const signUpFormFields = useMemo(() => getSignUpFormFields(togglePassword), [togglePassword]);

    const handleChange = useCallback(
        (e,action) => {
            dispatch({
                type: action,
                payload:{
                    [action] : e.target.value
                }
            })
        },
        []
    )

    const registerUser = useCallback(
        async () => {
            try{
                setLoading(true);
                const payload = {
                    firstName,
                    lastName,
                    userName: username,
                    password,
                    confirmPassword
                };
                await createUserData(payload);
                showToast({
                    type: "success",
                    message: "Successfully created"
                });
                history.push('/login');
            }catch(error){
                showToast({
                    type: "error",
                    message: error.message
                })
            }finally{
                setLoading(false);
            }
        },
        [firstName,lastName,username,password,confirmPassword]
    )

    const createUser = useCallback(
        e => {
            e.preventDefault();
            if(!firstName || !lastName || !username || !password || !confirmPassword)
                dispatch({
                    type: "error",
                    payload:{
                        error : true
                    }
                });
            else  
                registerUser();
        },
        [firstName,lastName,username,password,confirmPassword]
    )

    return(
        <div className={styleElem.root}>
            <Card className={styleElem.card}> 
                <div className={styleElem.logoWrapper}>
                    <img
                        className={styleElem.media}
                        src={LOGO}
                        title="SPI Global"
                    />
                </div>
                <CardContent>
                    <form autoComplete="off">
                        {
                            Object.keys(signUpFormFields).map(key => {
                                const flag = key === "confirmPassword" 
                                                ? password === confirmPassword && password !== ""
                                                : key === "password"
                                                ? showPassword
                                                : false
                                const { 
                                    showIconOne,
                                    type
                                } = toggleIcon(key,signUpFormFields[key],flag);
                                const inputProps = getInputProps(key,signUpFormFields,showIconOne);
                                return <TextField
                                    key={key}
                                    type= {type}
                                    label={signUpFormFields[key].name}
                                    className={inputStyle.textField}
                                    required
                                    fullWidth
                                    helperText={`Enter ${signUpFormFields[key].name}`}
                                    value={signUpCredentials[key]}
                                    onChange={e => handleChange(e,key)}
                                    InputProps={inputProps}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    variant="outlined"
                                    error={error && !signUpCredentials[key] ? true : false}
                                />
                            })
                        }
                    </form>
                </CardContent>
                <CardActions className={styleElem.cardAction}>
                    <Button color="primary" variant="contained" onClick={createUser}>
                        { loading ? 'Signing up...' : 'Sign Up' }
                        { loading ? <CircularProgress size={14} className={styleElem.spinner} /> : '' }
                    </Button>
                    <div className={styleElem.linkWrapper}>
                        <Link href="/login">Back to Login</Link>
                    </div>
                </CardActions>
            </Card>
        </div>
    )
}

export default SignUp;