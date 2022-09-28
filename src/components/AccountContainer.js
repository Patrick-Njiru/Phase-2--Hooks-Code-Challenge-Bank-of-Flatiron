import React, { useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch('http://localhost:8001/transactions').then(res => res.json()).then(transactionData =>setTransactions(transactionData))
    .catch(error => console.log(error))
  })

  return (
    <div>
      <Search transactions={transactions} />
      <AddTransactionForm transactions={transactions} />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
