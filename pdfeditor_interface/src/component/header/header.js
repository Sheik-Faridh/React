import React, { useState,useEffect,useCallback } from 'react';
import { AppBar, Toolbar, makeStyles, Avatar, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AlertDialog from '../alertdialog/alertdialog';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { setUser } from './helper';
import { logout,getLoggedInUserData } from '../../utils';
import { showToast } from '../../index';
import LOGO from '../../assets/img/logo2.png';

const useStyle = makeStyles(() => ({
    header:{
        background: '#7ceaae'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    logo_container : {
        color: '#000',
        letterSpacing: '1px',
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center'
    },
    logo_wrapper: {
        display: 'inline-block'
    },
    logo: {
        width: '70px',
        height: '55px'
    },
    large_text: {
        fontSize: '34px',
        textTransform: 'uppercase'
    },
    small_text: {
        fontSize: '34px',
        marginRight: '8px'
    },
    user_info_container: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0'
    },
    avatar: {
        margin: '0 5px'
    },
    user_details: {
        margin: '0 5px',
        color: '#000',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    username: {
        textTransform: 'capitalize',
        margin: '0 5px'
    },
    email: {
        margin: '0 5px'
    },
    icon: {
        position: 'relative',
        top: '4px',
        margin: '0 5px',
        color: '#000',
        fontSize: '18px'
    },
    logout_action: {
        margin: '0 5px'
    }
}))

const Header = ({user,setUserData}) => {

    const classes = useStyle();

    const history = useHistory();

    const [showAlert,setAlert] = useState(false);

    const handleClose = useCallback(
        e => {
            e.preventDefault();
            setAlert(false);
        },
        []
    )

    const handleOpen =  useCallback(
        e => {
            e.preventDefault();
            setAlert(true);
        },
        []
    )

    const userName = `${user.firstName} ${user.lastName}`.trim();

    useEffect(() => {
        if(!user.firstName || !user.lastName || !user.email){
            getLoggedInUserData()
                .then(user => {
                    const { firstName,lastName,email } = user;
                    setUserData({
                        firstName,
                        lastName,
                        email
                    });
                }).catch(error => {
                    showToast({
                        type: "error",
                        message: error.message
                    })
                })
        }
    },[])

    const logOutHandler = useCallback(
        async e => {
            try{
                e.preventDefault();
                await logout();
                localStorage.removeItem("loggedIn");
                showToast({
                    type: "success",
                    message: "Loggedout successfully"
                });
                history.push('/login');
            }catch(error){
                showToast({
                    type: "error",
                    message: error.message
                });
            }
        },
        []
    )

    return (
        <>
            <header>
                <AppBar className={classes.header}>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.logo_container}>
                            <div className={classes.logo_wrapper}><img className={classes.logo} src={LOGO} alt="spi-logo"/></div>
                            <span className={classes.large_text}>sp</span>
                            <span className={classes.small_text}>i</span>
                            <span className={classes.large_text}>g</span>
                            <span className={classes.small_text}>lobal</span>
                        </div>
                        <div className={classes.user_info_container}>
                            <div className={classes.avatar}>
                                <Avatar>{user.firstName.substring(0,1)}</Avatar>
                            </div>
                            <div className={classes.user_details}>
                                <div className={classes.username}>
                                    <PersonIcon className={classes.icon} />
                                    {userName}
                                </div>
                                <div className={classes.email}>
                                    <MailIcon className={classes.icon} />
                                    {user.email}
                                </div>
                            </div>
                            <div className={classes.logout_action}>
                                <Button variant="contained" color="primary" startIcon={<ExitToAppIcon />} onClick={handleOpen}>Logout</Button>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </header>
            { showAlert ? <AlertDialog title="Logout Confirm" content="Are you sure you want to logout now?" handleClose={handleClose} callback={logOutHandler} /> : "" }
        </>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    setUserData: data => {
        dispatch(setUser(data))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);