import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpenseDate from './ExpenseDate';

const Expenses = (props) => {
    console.log(props);
    return (
        <div className='expenses'>
            
            <ExpenseItem data={props.expenseData}></ExpenseItem>
        </div>
    )
}

export default Expenses;