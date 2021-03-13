import React, {useState,useMemo,useCallback} from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Card,CardContent,CardActions,TextField,Button,Link } from "@material-ui/core";
import useLoginCredentials from "./hooks";
import useStyles from "./styles";
import useStyledInput from "../styled/input";
import { getLoginFormFields,getInputProps,validateUser,setUser } from "./helper";
import LOGO from '../../assets/img/logo-spi-global.png';

const Login = props => {
    //custom hook for login credentials
    const { setUser } = props;
    const {loginCredentials,dispatch} = useLoginCredentials();
    const [loading,setLoading] = useState(false);
    const styleElem = useStyles();
    const inputStyle = useStyledInput();
    const {
        username,
        password,
        showPassword,
        error
    } = loginCredentials; 

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

    const loginFormFields = useMemo(() => getLoginFormFields(togglePassword), [togglePassword]);

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

    const loginClickHandler = useCallback(
        async e => {
            e.preventDefault();
            setLoading(true);
            if(!username || !password)
                dispatch({
                    type: "error",
                    payload:{
                        error : true
                    }
                })
            else{
                const userData = await validateUser(username,password);
                if(userData){
                    localStorage.setItem('loggedIn',true);
                    const {
                        lastName,firstName,email
                    } = userData;
                    setUser({lastName,firstName,email});
                }
            }
            setLoading(false);
        },
        [username,password]
    )

    return (
        <>
        {
            localStorage.getItem('loggedIn')
            ? <Redirect to='/upload_file' />
            : <div className={styleElem.root}>
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
                                Object.keys(loginFormFields).map(key => {
                                    const showIconOne = key === "password" && showPassword ? false :  true;
                                    const type = key === "password" && showPassword ? "text" : loginFormFields[key].type;
                                    const inputProps = getInputProps(key,loginFormFields,showIconOne);
                                    return <TextField
                                        key={key}
                                        type= {type}
                                        label={loginFormFields[key].name}
                                        className={inputStyle.textField}
                                        required
                                        fullWidth
                                        helperText={`Enter ${loginFormFields[key].name}`}
                                        value={loginCredentials[key]}
                                        onChange={e => handleChange(e,key)}
                                        InputProps={inputProps}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        variant="outlined"
                                        error={error && !loginCredentials[key] ? true : false}
                                    />
                                })
                            }
                        </form>
                    </CardContent>
                    <CardActions className={styleElem.cardAction}>
                        <Button color="primary" variant="contained" onClick={loginClickHandler}>
                            { loading ? "Signing..." : "Sign In" }
                            { loading && <CircularProgress size={14} className={styleElem.spinner}/>}
                        </Button>
                        <div className={styleElem.linkWrapper}>
                            <Link href="/signup">Register a User</Link>
                        </div>
                    </CardActions>
                </Card>
            </div>
        }
        </>
       
    )
}

const mapDispatchToProps = dispatch => ({
    setUser: data => {
        dispatch(setUser(data))
    }
})

export default connect(null,mapDispatchToProps)(Login);
