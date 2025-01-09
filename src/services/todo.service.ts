import {IPaginatedTodos} from "../models/IPaginatedTodos.ts";

export const getPaginatedTodos = async (): Promise<IPaginatedTodos> => {
    const response = await fetch(import.meta.env.VITE_API_URL + '/todos');
    return await response.json();
}