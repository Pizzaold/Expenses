import './ExpenseItem.css';

const Expenseitem = (props) => {
    return (
        <div className='expense-item'>
            <div>data</div>
            <div className='expense-item__description'>
                <h2>Title</h2>
                <div className='expense-item__price'>Amound</div>
            </div>
        </div>
    );
}

export default Expenseitem;