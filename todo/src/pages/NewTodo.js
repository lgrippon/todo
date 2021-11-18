import TodoForm from "../todos/TodoForm";

const NewTodo = () => {

    const addTodoHandler = todoData => {
        console.log(todoData);
    }


    return <TodoForm onAddTodo={addTodoHandler} />;
};

export default NewTodo;