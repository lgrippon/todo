import { Fragment } from 'react';

import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

const TodoList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            author={todo.author}
            text={todo.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default TodoList;
