
import { DUMMY_TODOS } from '../data';
import TodoList from "../todos/TodoList";

const AllTodos = () => {
  return <TodoList todos={DUMMY_TODOS} />;
};

export default AllTodos;
