import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {postService} from "../../services/post.service.ts";
import Post from "../post/Post.tsx";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const { posts } = await postService.getPosts();
            setPosts(posts);
        }

        fetchData();
    }, []);

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    );
};

export default Posts;