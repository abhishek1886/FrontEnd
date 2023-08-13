import Card from "../ui/Card"
import classes from './MeetupItem.module.css';

const MeetupDetails = (props) => {
  const { data } = props;
 return (
  <Card>
    <div className={classes.image}>
          <img src={data.image} alt={data.title} />
        </div>
        <div className={classes.content}>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <address>{data.address}</address>
        </div>
  </Card>
 )
}

export default MeetupDetails;