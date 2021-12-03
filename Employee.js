import Card from '../ui/Card';
import classes from './Employee.module.css';
function Employee(props) {
    return (
      <li className={classes.item}>
        <Card>
        <div className={classes.content}>
          <h3>{props.Name}</h3>
          <h3>{props.Age}</h3>
          <h3>{props.Department}</h3>
          <h3>{props.Salary}</h3>
        </div>
        </Card>
      </li>
    );
  }

export default Employee;