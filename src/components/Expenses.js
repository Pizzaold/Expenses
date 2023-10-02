import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';

const Expenses = (props) => {
    console.log(props);
    return (
        <Card className='expenses'>
            {props.expenseData.map((expense, index) => (
                <ExpenseItem key={index} data={expense}></ExpenseItem>
            ))}
        </Card>
    );
}

export default Expenses;