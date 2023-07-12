import './ExpenseItem.css'

function ExpenseDetails(props) {
  const title = props.title;
  const amount = props.amount;
  const location = props.location;

  return (
    <div className="expense-item__description">
      <div className = 'expense-item h2'>{props.location}</div>
      <h2 className = 'expense-item h2'>{props.title}</h2>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;