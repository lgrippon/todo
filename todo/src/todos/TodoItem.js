import { Link } from 'react-router-dom';
import classes from './TodoItem.module.css';

const TodoItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`/todos/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default TodoItem;
