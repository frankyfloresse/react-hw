import {IPostResponse} from "../models/IPostResponse.ts";

export const postService = {
    getPosts: async (): Promise<IPostResponse> => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
        return await response.json();
    }
}