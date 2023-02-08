import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
 
  if (props.listItem.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expense.</h2>
  }
  return <ul className="expenses-list">
    { props.listItem.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    )) }
    
    </ul>
  
};

export default ExpenseList;
