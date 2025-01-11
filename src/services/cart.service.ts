import {ICartResponse} from "../models/ICartResponse.ts";

export const cartService = {
    getCartsByUserId: async (userId: number | string): Promise<ICartResponse> => {
        const response = await fetch(`https://dummyjson.com/users/${userId}/carts`)
        return await response.json();
    }
}