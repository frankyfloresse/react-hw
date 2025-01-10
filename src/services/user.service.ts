import {IUserResponse} from "../models/IUserResponse.ts";

export const userService = {
    getUsers: async (): Promise<IUserResponse> => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users`);
        return await response.json();
    }
}