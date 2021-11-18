import classes from './NoTodosFound.module.css';

const NoTodosFound = () => {
  return (
    <div className={classes.notodos}>
      <p>No todos found!</p>
      <a className='btn'>
        Add a Todo
      </a>
    </div>
  );
};

export default NoTodosFound;
