import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    console.log(props);
    return (
        <div className='expenses'>
            {props.expenseData.map((expense, index) => (
                <ExpenseItem key={index} data={expense}></ExpenseItem>
            ))}
        </div>
    );
}

export default Expenses;