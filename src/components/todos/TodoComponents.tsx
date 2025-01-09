import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {getPaginatedTodos} from "../../services/todo.service.ts";
import TodoComponent from "../todo/TodoComponent.tsx";


const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { todos } = await getPaginatedTodos();
            setTodos(todos)
        }

        fetchData();
    }, []);

    return (
        <div className={'p-3'}>
            <div className={'mb-3 text-[22px] font-bold'}>My To Do list</div>
            <div className={'space-y-3'} >
                {
                    todos.map(item => <TodoComponent key={item.id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default TodoComponents;