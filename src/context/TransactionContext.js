import React,{createContext,useState} from "react";

export const TransactionContext=createContext();

export const TransactionContextProvider=({children})=>{

    const [transactions,setTransactions]=useState([]);
    const [balance,setBalance]=useState(5000);
    const [credit,setCredit]=useState(null);
    const [debit,setDebit]=useState(null);

    const addTransaction=(e,tran)=>{
        const {trans="",isDebit = false, isCredit = false, amt = 0 } = tran;
        e.preventDefault();
        if (!trans.trim()) {
            alert("Transaction description cannot be empty.");
            return;
          }
          
          if (!amt || isNaN(amt) || amt <= 0) {
            alert("Please enter a valid positive amount.");
            return;
          }
          
          setTransactions((prevTransactions) => [
            ...prevTransactions,
            {
              id: Date.now(),
              trans: trans.trim(),
              isDebit: !!isDebit,
              isCredit: !!isCredit,
              amt: Number(amt),
            }
          ]);
        handleAmounts(isCredit,isDebit,amt);
    }

    const handleAmounts=(isCredit,isDebit,amt)=>{
        if (isCredit){
            setBalance((prev)=>prev+=Number(amt));
            setCredit((prev)=>prev+Number(amt));
        }
        else if (isDebit){
            setBalance((prev)=>prev-=Number(amt));
            setDebit((prev)=>prev+Number(amt));
        }
    }

    return(
        <TransactionContext.Provider value={{transactions,addTransaction,balance,credit,debit}}>
            {children}
        </TransactionContext.Provider>
    )
}