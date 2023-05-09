import "./Posts.scss";

import { Post } from "./Post/Post";

interface PostsProps {
    posts: Post[];
    onClickLike: (idx: number) => void;
}

export const Posts: React.FC<PostsProps> = ({ posts, onClickLike }) => {
    const reversedPosts = posts.slice().reverse();
    return (
        <div>
            <div className="posts">
                {reversedPosts.map((post, i) => <Post key={post._id} post={post} onClickLike={() => onClickLike(i)} />)}
            </div>
        </div>
    );
};

