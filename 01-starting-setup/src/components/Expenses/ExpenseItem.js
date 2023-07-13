import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";  
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const clickHandler = () => {
    //code to delete the expense
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        title={props.title}
        location = {props.location}
      />
      <button onClick = {clickHandler}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
