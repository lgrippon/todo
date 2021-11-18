import {Fragment, useEffect, useState} from 'react';
import {useParams, Route} from 'react-router-dom';
import Comments from '../comments/Comments';
import {DUMMY_TODOS} from '../data';
import HighlightedTodo from "../todos/HighlightedTodo";


const TodoDetail = () => {

    const params = useParams();

    const todo = DUMMY_TODOS.find(todo => todo.id === params.todoId);
    const [todoJson, setTodo] = useState([])
    const [enteredId, setEnteredId] = useState("");
    const [enteredText, setEnteredText] = useState("");

    let valueTodo = "https://cat-todo-list.herokuapp.com/todos";

    const fetchData = async () => {
        return await fetch(valueTodo)
            .then((response) => response.json())
            .then((data) => setTodo(data));
    }

    useEffect(() => {
        fetchData()
    }, []);


    if (!todo) {
        return <p>No todo found for id {params.todoId}</p>
    }

    console.log(todoJson)



    const idChangeHandler = (event) => {
        setEnteredId(event.target.value);
    };

    const textChangeHandler = (event) => {
        setEnteredText(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            id: enteredId,
            text: enteredText,

        };
        /* props.onSaveExpenseData est une function */
        todoJson.saveExpenseDataHandler(expenseData);

        setEnteredId('');
        setEnteredText('');
    };
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
    }


    return (


        <Fragment>
            <form onSubmit={submitHandler} >
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Id</label>
                        <input type="number" value={enteredId} onChange={idChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Text</label>
                        <input
                          type="text"
                            value={enteredText}
                            onChange={textChangeHandler}
                        />
                    </div>
                </div>
                <button onClick="saveExpenseDataHandler()" /> </button>
            </form>


            <h1><HighlightedTodo text={todo.text}/></h1>
            <Route path={`/todos/${params.todoId}/comments`}>
                <Comments/>
            </Route>
            <ul>
                {todoJson.map(element => <div>{element.id} => {element.content}</div>)}
            </ul>

        </Fragment>
    );
};

export default TodoDetail;
