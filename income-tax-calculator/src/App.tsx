import TaxCalculator from './components/TaxCalculator';
import TaxInfo from './components/TaxInfo';
import useGlobalState , { AppContext } from './hooks/useGlobalState';
import './App.css';

const App = () => {
  const [store,dispatch] = useGlobalState();

  return (
    <AppContext.Provider value={{ store,dispatch }}>
      <div className="w-screen h-screen	flex justify-center items-center bg-gray-300 sm:w-full sm:h-full sm:p-6">
        <div className="w-11/12 h-4/5">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-1">
            <TaxInfo />
            <TaxCalculator />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
