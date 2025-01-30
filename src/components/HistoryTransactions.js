import React,{useContext} from 'react';
import { TransactionContext } from '../context/TransactionContext';

function HistoryTransactions() {

    const {transactions}=useContext(TransactionContext);

  return (
    <>
    <h3 className='text-center font-bold text-[33px] mt-10 text-black underline'>
      History of Transactions</h3>
    <div className="flex  flex-col items-center justify-center gap-4 mt-5">
      
      {
        transactions.map((t)=>(
            <div className={`flex justify-around p-2 bg-gray-200 rounded-lg w-[920px] border-r-4
              ${t.isCredit ? "border-r-green-800" : "border-r-red-800"}`}
            key={t.id}>
                <p className='font-semibold text-[20px]'>{t.trans}</p>
                <p className={`${t.isCredit ? "text-green-800" : "text-red-800"} text-[20px] font-bold` }>
                  <i className="fa-solid fa-indian-rupee-sign text-[20px]"></i>{t.amt}</p>
            </div>
        ))
      }
    </div>
    </>
  )
}

export default HistoryTransactions
