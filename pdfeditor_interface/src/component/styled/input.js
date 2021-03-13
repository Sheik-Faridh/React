import {
  makeStyles
} from '@material-ui/core/styles';

const StyledInput = makeStyles((theme) => ({
    textField: {
      marginTop: "25px",
      "& label":{
        color: "rgb(71, 88, 103)",
        fontWeight: "500"
      },
      "& label .MuiFormLabel-asterisk":{
        color: "#f00"
      },
      "& .MuiInputBase-formControl":{
        height: "48px",
      },
      "& .MuiInputBase-root input":{
        paddingLeft: "15px"
      }
    }
  }))

  export default StyledInput;