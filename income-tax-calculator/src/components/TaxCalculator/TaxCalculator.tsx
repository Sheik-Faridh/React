import { useEffect, useContext } from 'react';
import { useFormik  } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { AppContext } from '../../hooks/useGlobalState';
import { validateTaxFields,calculateTax } from './taxUtils';
import { taxFormFields,taxFormInitialData } from './taxFormType';
import { FormError } from '../../interface';

const useStyles = makeStyles((themes) => ({
    formControl: {
        width: '100%',
        '& .MuiInputBase-root':{
            backgroundColor: '#fff'
        },
        '& .MuiSelect-selectMenu':{
            padding: '6px 32px 6px 10px',

            '&:focus' : {
                backgroundColor: '#fff'
            }
        }
    },
    textField:{
        '& .MuiOutlinedInput-input':{
            padding: '6px 10px'
        }
    },
    button: {
        margin: themes.spacing(1)
    }
}));

  
const FormSelect = ({field,formik}:any) => {
    const classes: any = useStyles();

    return (
        <FormControl className={classes.formControl} variant="outlined" error={formik.touched[field.name] && Boolean(formik.errors[field.name])}>
            <Select 
                name={field.name}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="" disabled>{`Choose ${field.label}`}</MenuItem>
                { field.options.map((option:string) => <MenuItem key={option} value={option}>{option}</MenuItem>)}
            </Select>
            <FormHelperText>{formik.touched[field.name] ? formik.errors[field.name] : ""}</FormHelperText>
        </FormControl>
    )
}

const FormInput = ({field,formik}:any) => {
    const classes: any = useStyles();

    return (
        <TextField
            className={classes.textField}
            fullWidth
            variant="outlined"
            id={field.name}
            name={field.name}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
            helperText={formik.touched[field.name] && formik.errors[field.name]}
        />
    )
}

const TaxCalculator = () => {

    const classes: any = useStyles();

    const { store, dispatch } : any = useContext(AppContext);

    const submitHandler = (values: any) : void => {
        const { incomeSalary,epf,lifeInsurancePremiumPaid,medicalInsurance,assessmentYear } = values;
        const epfAmount : number = Number(epf) > 150000 ? 150000 : Number(epf) ;
        const lifeInsuranceAmount : number = Number(lifeInsurancePremiumPaid) > 25000 ? 25000 : Number(lifeInsurancePremiumPaid) ;
        const mediClaimAmount : number = Number(medicalInsurance) > 25000 ? 25000 : Number(medicalInsurance);
        const taxableIncome : number = incomeSalary - (epfAmount + lifeInsuranceAmount + mediClaimAmount);
        const taxAmount : number = calculateTax(assessmentYear,taxableIncome);
        dispatch({
            payload: {
                financialYear: assessmentYear,
                totalIncome: Number(incomeSalary),
                taxableIncome: taxableIncome,
                taxAmount: taxAmount
            }
        });
    }

    const validate = (values:any) : FormError => {
        const errors : FormError = validateTaxFields(values);
        dispatch({
            payload: {
                financialYear: values.assessmentYear,
                totalIncome: 0,
                taxableIncome: 0,
                taxAmount: 0
            }
        });
        return errors;
    }

    const formik = useFormik({
        initialValues: taxFormInitialData,
        validate: validate,
        onSubmit: submitHandler
    })

    useEffect(() => {
        store.financialYear !== formik.values.assessmentYear && dispatch({ payload: { financialYear: formik.values.assessmentYear }} );
    },[store, dispatch, formik.values.assessmentYear])

    return (
        <div className="col-span-2 flex flex-col bg-white shadow-md">
            <div className="w-full h-auto bg-gradient-to-r from-green-400 to-blue-500 text-white p-1.5 text-lg">
            Income Tax Calculator
            </div>
            <div className="p-2">
                <form onSubmit={formik.handleSubmit}>
                    {
                        Object.values(taxFormFields).map((taxFieldData,i) => (
                            <div key={i} className="m-4">
                                <span className="block p-2 bg-indigo-100 text-center uppercase font-semibold">{taxFieldData.label}</span>
                                {
                                    taxFieldData.fields.map((field : any, j:  number)=> (
                                        <div key={j} className="flex items-center grid gap-4 grid-cols-2 m-1">
                                            <div className={field.required ? "required" : ""}>{field.label}</div>
                                            <div>{field.options ? <FormSelect field={field} formik={formik} /> : <FormInput field={field} formik={formik} />}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                    <div className="text-center">
                        <Button className={classes.button} color="primary" variant="contained" type="submit">Calculate Tax</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TaxCalculator;