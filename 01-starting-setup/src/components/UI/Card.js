import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;

  return (
    <div className = {classes} id={props.id}>{props.children}</div>
  );
}

export default Card;