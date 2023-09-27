import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
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
  ]
  

  return (
    <div className='App'>
      <ExpenseItem expenseData={expense[0]}></ExpenseItem>
      <ExpenseItem expenseData={expense[1]}></ExpenseItem>
    </div>
  );
}

export default App;
