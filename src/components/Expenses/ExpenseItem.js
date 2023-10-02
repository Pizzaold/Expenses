import React,{ useState }  from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const Expenseitem = (props) => {
    const [title, setTitle] = useState(props.data.title);

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title);
    }
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.data.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item__price'>{props.data.price}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );
}

export default Expenseitem;