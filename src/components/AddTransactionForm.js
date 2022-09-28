import React, { useState } from "react";

function AddTransactionForm() {
  const [form, setForm] = useState({
    date : "",
    description: "",
    category: "",
    amount: 0
  })

  const handleChange = e => (setForm({ ...form, [e.target.name]: e.target.value}))

  const handleSubmit  = e => {

    e.preventDefault()
    const updatedForm = {
      date: form.date,
      description: form.description,
      category: form.category,
      amount: form.amount
    }

    fetch('http://localhost:8001/transactions', {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(updatedForm)
    })

    setForm({
      date : "",
      description: "",
      category: "",
      amount: 0
    })

  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input 
          type="date" 
          name="date"
          value={form.date}
          onChange={(e) => handleChange(e)}
          />
          <input 
          type="text" 
          name="description" 
          placeholder="Description" 
          value={form.description}
          onChange={(e) => handleChange(e)}
          />
          <input 
          type="text" 
          name="category" 
          placeholder="Category"
          value={form.category}
          onChange={(e) => handleChange(e)} 
          />
          <input 
          type="number" 
          name="amount" 
          placeholder="Amount" 
          step="0.01" 
          value={form.amount}
          onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
