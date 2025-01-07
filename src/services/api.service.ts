import {urls} from "../constants/urls.tsx";
import {ITodo} from "../models/ITodo.ts";

export const todoService = {
    getAllTodos: async (): Promise<ITodo[]> => {
        const res = await fetch(urls.todos.allTodos);
        return await res.json();
    }
}
