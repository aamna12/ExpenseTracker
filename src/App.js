import { useContext } from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import { TransactionContext} from './context/TransactionContext';
import HistoryTransactions from './components/HistoryTransactions';

function App() {

  const {credit,debit,transactions} = useContext(TransactionContext);

  return (
    <>
    
    <h1 className="text-green-800 text-center font-bold text-[50px]">Expense Tracker</h1>
    
    <AddTransaction />

    <div className='flex justify-around mt-10'>
      <div className='p-2 border-b-2 border-red-700 w-[230px] rounded-sm'>
        <p className='font-bold text-[20px]'>Debit</p>
        <p className='font-bold text-[18px] text-red-700'>
          <i className="fa-solid fa-indian-rupee-sign text-[18px] font-bold"></i> {debit}
        </p>
      </div>
      <div className='p-2 border-b-2 w-[230px] rounded-sm border-green-800'>
        <p className='font-bold text-[20px]'>Credit</p>
        <p className='font-bold text-[18px] text-green-800'>
          <i className="fa-solid fa-indian-rupee-sign text-[18px] font-bold"></i> {credit}
        </p>
      </div>
    </div>

    {
      transactions.length > 0 ?
      <HistoryTransactions />
      : ""
    }

    
    </>
  );
}

export default App;
