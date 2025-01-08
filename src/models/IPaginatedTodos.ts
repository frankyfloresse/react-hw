import {ITodo} from "./ITodo.ts";

export interface IPaginatedTodos {
    limit: number
    skip: number
    total: number
    todos: ITodo[]
}