import React, { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';

function AddTransaction() {

    const {addTransaction,balance}=useContext(TransactionContext);
    const [addBtn,setAddBtn]=useState(false);
    const [trans,setTrans]=useState("");
    const [amt,setAmt]=useState(0);
    const [isCredit,setIsCredit]=useState(false);
    const [isDebit,setIsDebit]=useState(false);

    const handleSaveBtn=(e)=>{
      e.preventDefault();
      if (!trans.trim()) {
        alert("Please enter a transaction description.");
        return;
      }
      if (amt <= 0 || isNaN(amt)) {
        alert("Please enter a valid positive amount.");
        return;
      }
      if (!isCredit && !isDebit) {
        alert("Please select either Debit or Credit.");
        return;
      }
  
      addTransaction(e, { trans, isCredit, isDebit, amt: Number(amt) });
  
      // Clear input fields after saving
      setTrans("");
      setAmt(0);
      setIsCredit(false);
      setIsDebit(false);
      setAddBtn(false);
    }

  return (
    <>
    <div className='flex justify-around mt-10'>
      <div className='flex border-4 p-2  rounded-xl w-[300px] justify-center items-center'>
        <p className='font-bold mr-3 text-[24px] text-green-800 underline'>Balance: </p>
        <p className="text-[20px] font-bold">
          <i className="fa-solid fa-indian-rupee-sign text-[18px]"></i> {balance}</p>
      </div>
      
      <button className='p-2 bg-green-800 text-white font-semibold text-[20px] hover:border-2 
      hover:border-green-800 hover:bg-white hover:text-green-800 rounded-lg'
      onClick={()=>setAddBtn((prev)=>!prev)}>
        Add a Transaction</button>
    </div>

    {
        addBtn ? 
        <div className='flex justify-center mt-8 '>
            <div className='border-[2px] p-3 flex justify-evenly items-center w-full mx-10'>

                <input type="text" placeholder='add transaction...'  value={trans} 
                       onChange={(e)=>setTrans(e.target.value)}
                       className="p-2 border-[1px] border-black w-[280px] rounded-md"/>

                <input type="number" placeholder='add amount...'  value={amt} 
                       onChange={(e)=>setAmt(e.target.value)}
                       className="p-2 border-[1px] border-black w-[280px] rounded-md"/>

                <div className='flex items-center'>
                    <input type="radio" id="debit" onChange={()=>{setIsDebit(true);
                                                                    setIsCredit(false);}}
                                                                    checked={isDebit}/>
                    <label htmlFor='debit' className='ml-1 text-[20px]'>Debit</label>
                </div>

                <div className='flex items-center'>
                    <input type="radio" id="credit" onChange={()=>{setIsCredit(true);
                                                                   setIsDebit(false);}}
                            checked={isCredit}/>
                    <label htmlFor='credit' className='ml-1 text-[20px]'>Credit</label>
                </div>

                <button onClick={handleSaveBtn}
                    className='p-2 bg-green-700 text-white font-semibold text-[20px] rounded-xl
                    w-[100px]'>
                                     Save</button>
            </div>
        </div>
        : ""
        }
    
    </>
  )
}

export default AddTransaction
