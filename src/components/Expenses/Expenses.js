import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFliter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [selectYear, setSelectedYear] = useState("2020");

  const onSelectYearFilterHandler = (yearSelected) => {
    setSelectedYear(yearSelected);
  };
  const filteredExpense = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectYear
  );
  console.log("test");

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectYear}
        onSelectYearFilter={onSelectYearFilterHandler}
      ></ExpensesFilter>
      {/* { filteredExpense.length === 0 ? <p>No expenses</p> : filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>)) } */}

      {/* {filteredExpense.length === 0 && <p>No expenses</p>}
      {filteredExpense.length > 0 && filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>))} */}
      <ExpenseList listItem = {filteredExpense}></ExpenseList>
    </Card>
  );
};

export default Expenses;
