import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    date: new Date(2023, 0, 10),
    title: 'New book',
    amount: 30.99,
  },
  {
    id: 'e2',
    date: new Date(2022, 2, 15),
    title: 'New TV',
    amount: 100.99,
  },
  {
    id: 'e3',
    date: new Date(2023, 10, 2),
    title: 'New PC',
    
    amount: 2000,
  },
  {
    id: 'e4',
    date: new Date(2021, 5, 5),
    title: 'New Phone',
    amount: 500,
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE)

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  console.log(expenses)

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
