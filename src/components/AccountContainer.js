import React, { useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch('http://localhost:8001/transactions').then(res => res.json()).then(transactionData => setTransactions(transactionData))
    .catch(error => console.log(error))
  })

  const searchFilter = e => {
    const filteredResults = transactions.filter(transaction => transaction.description.toUpperCase().includes(e.target.value.toUpperCase()))
    setTransactions(filteredResults)
  }

  return (
    <div>
      <Search searchFilter={searchFilter} />
      <AddTransactionForm transactions={transactions} />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
