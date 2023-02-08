import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [showDialog, setShowDialog]=useState(false);

  const onAddExpenseHandler =(expenseData)=>{
    const expenseDataFull = {
      ...expenseData, 
      id: Math.random().toString()
    };

    props.onAddExpense(expenseDataFull);
  }

  const setDialogHandler =()=>{
    setShowDialog(true)
  }

  const cancelDialogHandler =()=>{
    setShowDialog(false)
  }

  return <div className="new-expense">
    {!showDialog && <button onClick={setDialogHandler}>Add New Expense</button>}
    {showDialog && <ExpenseForm onAddExpense={onAddExpenseHandler} onCancel = {cancelDialogHandler}></ExpenseForm>}
  </div>;

};

export default NewExpense;
