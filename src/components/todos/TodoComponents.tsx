import TodoComponent from "../todo/TodoComponent.tsx";
import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {todoService} from "../../services/api.service.ts";

const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const fetchTodo = async () => {
            const todos = await todoService.getAllTodos();
            setTodos(todos);
        }

        fetchTodo();
    }, []);


    return (
        <div>
            {
                todos.map(item =><TodoComponent key={item.id} item={item} /> )
            }
        </div>
    );
};

export default TodoComponents;