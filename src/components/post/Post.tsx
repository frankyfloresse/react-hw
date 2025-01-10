import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

interface IProps {
    post: IPost;
}

const Post: FC<IProps> = ({ post }) => {
    return (
        <div>
            <div>{post.id}. {post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default Post;