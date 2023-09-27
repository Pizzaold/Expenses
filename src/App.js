import './App.css';
import Expenses from './components/Expenses';

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
      <Expenses expenseData={expense[0]}></Expenses>
      <Expenses expenseData={expense[1]}></Expenses>
    </div>
  );
}

export default App;
