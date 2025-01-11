import {IUserResponse} from "../models/IUserResponse.ts";

export const userService = {
    getUsers: async (): Promise<IUserResponse> => {
        const response = await fetch('https://dummyjson.com/users');
        return await response.json();
    }

}