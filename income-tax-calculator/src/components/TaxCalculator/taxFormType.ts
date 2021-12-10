import { TaxForm, TaxFormvalue } from '../../interface';

const taxFormFields : TaxForm = {
    income: {
        label: "Income",
        fields: [
            {
                name: "assessmentYear",
                label: "Assessment Year",
                options: [ "2020 - 2021","2021 - 2022"],
                required: true
            },
            {
                name: "taxPayer",
                label: "Tax Payer",
                options: [ "Individual"],
                required: true
            },
            {
                name: "genderOrCitizenType",
                label: "Gender / Citizen",
                options: [ "Male", "Female", "Senior Citizen" ],
                required: true
            },
            {
                name: "residentialStatus",
                label: "Residential Status",
                options: [ "Resident", "Non-Resident" ],
                required: true
            },
            {
                name: "incomeSalary",
                label: "Income Salary",
                required: true
            }
        ]
    },
    deductions: {
        label: "Deductions",
        fields: [
            {
                name: "lifeInsurancePremiumPaid",
                label: "Life Insurance premium paid",
                required: false
            },
            {
                name: "epf",
                label: "Contribution toward provident fund / PPF",
                required: false
            },
            {
                name: "medicalInsurance",
                label: "Medi-claim premium (u/s 80D)",
                required: false
            }
        ]
    }
}

const taxFormInitialData: TaxFormvalue = {
    assessmentYear: "2020 - 2021",
    taxPayer: "",
    genderOrCitizenType: "",
    residentialStatus: "",
    incomeSalary: 0,
    lifeInsurancePremiumPaid: 0,
    epf: 0,
    medicalInsurance: 0
}

export {
    taxFormFields,
    taxFormInitialData
};