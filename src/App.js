import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expense = [
    {
    date: new Date(2023, 0, 10),
    title: 'New book',
    price: 30.99,
    },
    {
    date: new Date(2022, 2, 15),
    title: 'New TV',
    price: 100.99,
    },
    { 
    date: new Date(2023, 10, 2),
    title: 'New PC',
    price: 2000,
    },
  ]
  
  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenseData={expense}></Expenses>
    </div>
  );
}

export default App;
