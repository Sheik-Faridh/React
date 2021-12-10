export interface initialStore {
    financialYear: string,
    totalIncome: number,
    taxableIncome: number,
    taxAmount: number
}

export interface Fields {
    name: string,
    label: string,
    options?: string[],
    required: boolean
}

export interface Collections {
    fields: Array<Fields>,
    label: string
}

export interface TaxForm {
    income: Collections,
    deductions: Collections
}

export interface TaxFormvalue {
    assessmentYear: string,
    taxPayer: string,
    genderOrCitizenType: string,
    residentialStatus: string,
    incomeSalary: number,
    lifeInsurancePremiumPaid?: number,
    epf?: number,
    medicalInsurance?: number
}

export interface TaxRate {
    start_income: number,
    end_income: number | null,
    label: string,
    rate: number
};

export interface TaxRateDataCollection {
    [key: string]: Array<TaxRate>
}

export interface FormError {
    [key : string] : string
}