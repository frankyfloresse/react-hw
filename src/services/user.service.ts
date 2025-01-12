import {IUserResponse} from "../models/IUserResponse.ts";

export const userService = {
    getAllUsers: async (page: string): Promise<IUserResponse> => {
        const response = await fetch('https://dummyjson.com' + '/users?skip=' + ((+page - 1) * 30));
        return await response.json();
    }
}