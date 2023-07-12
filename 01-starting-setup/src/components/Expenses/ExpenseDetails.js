import './ExpenseItem.css'
import Card from '../UI/Card';

function ExpenseDetails(props) {
  const title = props.title;
  const amount = props.amount;
  const location = props.location;

  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <Card className = 'expense-item h2'>{props.location}</Card>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;