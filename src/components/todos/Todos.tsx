import Todo from "../todo/Todo.tsx";
import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {todoService} from "../../services/api.service.ts";

const Todos = () => {
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
                todos.map(item =><Todo key={item.id} item={item} /> )
            }
        </div>
    );
};

export default Todos;