import { FormError,TaxRate } from '../../interface';
import taxRateData from '../TaxInfo/taxRateData';

const validateAmount = (salary : string | number) : any => {
    if(!salary) return 'Please enter the amount';
    else if(!Number(salary)) return 'Please enter the number';
    else if(Number(salary) < 0) return 'Please enter the positive number';
    else return null;
}

export const validateTaxFields = (values : any) : FormError => {
    const errors : FormError = {} ;

    if(!values.assessmentYear) errors.assessmentYear = 'Please Choose Assessment Year';
    if(!values.taxPayer) errors.taxPayer = 'Please Choose Tax Payer';
    if(!values.genderOrCitizenType) errors.genderOrCitizenType = 'Please choose the Gender or Citizen Type';
    if(!values.residentialStatus) errors.residentialStatus = 'Please choose the Residential Status';

    const incomeSalaryMsg = validateAmount(values.incomeSalary);
    if(incomeSalaryMsg) errors.incomeSalary = incomeSalaryMsg;

    for(const prop of ['lifeInsurancePremiumPaid','epf','medicalInsurance']){
        const propMsg = values[prop] ? validateAmount(values[prop]) : null;
        if(propMsg) errors[prop] = propMsg;
    }

    return errors;
}

export const calculateTax = (financialYear:string,taxableIncome: number) : number=> {
    if(taxableIncome < 250000) return 0;

    return taxRateData[financialYear].reduce((taxAmount:number,rateData:TaxRate) : number => {
        if(rateData.end_income && ( rateData.end_income * Math.pow(10,5)) < taxableIncome) taxAmount += 250000 * (rateData.rate/100);
        else if(rateData.end_income && ( rateData.end_income * Math.pow(10,5)) > taxableIncome && ( rateData.start_income * Math.pow(10,5)) < taxableIncome) taxAmount += (Math.abs(taxableIncome - (rateData.start_income * Math.pow(10,5)))) * (rateData.rate/100);
        return taxAmount;
    },0);
}