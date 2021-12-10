import { createContext, useReducer } from 'react';
import { taxFormInitialData } from '../components/TaxCalculator/taxFormType';
import { initialStore } from '../interface';

const initialState : initialStore = {
    financialYear: taxFormInitialData.assessmentYear,
    totalIncome: 0,
    taxableIncome: 0,
    taxAmount: 0
}

const reducer = (state: any, action: any) : any => action ? { ...state, ...action.payload } : state;

const useGlobalState = () : any => useReducer(reducer,initialState)

export const AppContext = createContext<unknown>(null);

export default useGlobalState;