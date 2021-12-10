import { TaxRateDataCollection } from '../../interface';

const taxRateData : TaxRateDataCollection = {
    "2020 - 2021": [
        {
            start_income: 0,
            end_income: 2.5,
            label: "Up to 2.5 lakh",
            rate: 0
        },
        {
            start_income: 2.5,
            end_income: 5,
            label: "From 2,50,001 to Rs 5,00,000",
            rate: 5
        },
        {
            start_income: 5,
            end_income: 7.5,
            label: "From 7,50,001 to Rs 10,00,000",
            rate: 10
        },
        {
            start_income: 7.5,
            end_income: 10,
            label: "From 7,50,001 to Rs 10,00,000",
            rate: 15
        },
        {
            start_income: 10,
            end_income: 12.5,
            label: "From 10,00,001 to Rs 12,50,000",
            rate: 20
        },
        {
            start_income: 12.5,
            end_income: 15,
            label: "From 12,50,001 to Rs 15,00,000",
            rate: 25
        },
        {
            start_income: 15,
            end_income: null,
            label: "Above 15,00,000",
            rate: 30
        }
    ],
    "2021 - 2022": [
        {
            start_income: 0,
            end_income: 2.5,
            label: "Up to 2.5 lakh",
            rate: 0
        },
        {
            start_income: 2.5,
            end_income: 5,
            label: "From 2,50,001 to Rs 5,00,000",
            rate: 10
        },
        {
            start_income: 5,
            end_income: 7.5,
            label: "From 7,50,001 to Rs 10,00,000",
            rate: 15
        },
        {
            start_income: 7.5,
            end_income: 10,
            label: "From 7,50,001 to Rs 10,00,000",
            rate: 20
        },
        {
            start_income: 10,
            end_income: 12.5,
            label: "From 10,00,001 to Rs 12,50,000",
            rate: 25
        },
        {
            start_income: 12.5,
            end_income: 15,
            label: "From 12,50,001 to Rs 15,00,000",
            rate: 30
        },
        {
            start_income: 15,
            end_income: null,
            label: "Above 15,00,000",
            rate: 35
        }
    ]
}

export default taxRateData;