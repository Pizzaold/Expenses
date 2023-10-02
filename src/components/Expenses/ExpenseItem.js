import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const Expenseitem = (props) => {
    console.log(props);
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.data.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item__price'>{props.data.price}</div>
            </div>
        </div>
    );
}

export default Expenseitem;