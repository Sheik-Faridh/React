import { useContext } from 'react';
import taxRateData from './taxRateData';
import { AppContext } from '../../hooks/useGlobalState';
import { TaxRate } from '../../interface';

const TaxInfo = () => {

    const { store } : any = useContext(AppContext);

    const rateData : Array<TaxRate> = taxRateData[store.financialYear] ;

    return (
        <div className="flex flex-col">
            <div className="bg-white shadow-md h-auto p-3 rounded-sm">
                <table className="w-full table-auto text-center border-separate border">
                    <caption>Income Tax Slabs</caption>
                    <thead>
                        <tr>
                            <th className="text-xs border border-indigo-100 bg-indigo-100 p-1">Total Income</th>
                            <th className="text-xs border border-indigo-100 bg-indigo-100 p-1">Income Tax Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rateData.map((data,i) => (
                                <tr key={i}>
                                    <td className="text-xs border border-indigo-100 bg-indigo-100 p-1">{data.label}</td>
                                    <td className="text-xs border border-indigo-100 bg-indigo-100 p-1">{data.rate}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {
                store.taxAmount ?   <div className="bg-white shadow-md h-auto p-3 rounded-sm mt-8">
                                        <table className="w-full table-auto text-center border-separate border">
                                            <caption>Tax for {store.financialYear}</caption>
                                            <tbody>
                                                <tr>
                                                    <td className="text-xs border border-indigo-100 bg-indigo-100 p-1">Your Total Salary is</td>
                                                    <td className="text-xs border border-indigo-100 bg-indigo-100 p-1">{store.totalIncome}</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-xs border border-indigo-100 bg-indigo-100 p-1">Your Taxable Salary is</td>
                                                    <td className="text-xs border border-indigo-100 bg-indigo-100 p-1">{store.taxableIncome}</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-xs border border-indigo-100 bg-indigo-100 p-1">Your Total Tax is</td>
                                                    <td className="text-xs border border-indigo-100 bg-indigo-100 p-1">{store.taxAmount}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                :   ""
            }
        </div>
    )
}

export default TaxInfo;