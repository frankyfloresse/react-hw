import {ITodo} from "../models/ITodo.ts";

export const todoService = {
    getAllTodos: async (): Promise<ITodo[]> => {
        const res = await fetch(import.meta.env.VITE_API_URL + '/todos');
        return await res.json();
    }
}