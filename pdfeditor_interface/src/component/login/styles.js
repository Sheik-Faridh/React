import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root:{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        margin: "0",
        padding: "0",
        background: "#b8f5d4",
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        "& button":{
            background: "#25c16f",
            margin: "5px",
            textTransform: "capitalize",
            "&:hover":{
                background: "#16a358"
            }
        }
    },
    card:{
        width: "550px",
        padding: "15px",
        boxShadow: "0px 10px 20px 0px rgba(50, 50, 50, 0.52)"
    },
    logoWrapper:{
        display: "flex",
        justifyContent: "center",
        margin: "0"
    },
    media: {
        height: "55px"
    },
    cardAction:{
        display: "flex",
        justifyContent:"center",
        flexDirection: "column"
    },
    linkWrapper:{
        margin: "10px",
        fontSize: "14px",
        "& a":{
            color: "#4d4d4d",
            fontWeight: "600"
        }
    },
    spinner: {
        marginLeft: "8px",
        color: "#FFF"
    }
}))

export default useStyles;