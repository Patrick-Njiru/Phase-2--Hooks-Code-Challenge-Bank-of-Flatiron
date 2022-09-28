import React from "react";

function Transaction({ transactions }) {

  const transactionDetails = transactions.map(transaction => (
    <tr key={transaction.id}>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  ))

  return transactionDetails
}

export default Transaction;
