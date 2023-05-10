import "./Posts.scss";

import { useSelector } from "react-redux";

import { userIdSelector, userSelector } from "@redux/userSlice/selectors";
import { like } from "@utils/api/requests/post";
import { Post } from "./Post/Post";

interface PostsProps {
    posts: Post[];
    setPosts: (value: React.SetStateAction<Post[]>) => void;
}

export const Posts: React.FC<PostsProps> = ({ posts, setPosts }) => {
    const myId = useSelector(userIdSelector);
    const me = useSelector(userSelector);

    const reversedPosts = posts.slice().reverse();
    const onClickLike = (idx: number) => {
        if (!me || !myId) return;

        setPosts(old => {
            const newPosts = old.slice();
            const targetPost = newPosts[idx];

            const isExistMyLike = targetPost.likes.find(user => user._id === myId);

            if (isExistMyLike) {
                targetPost.likes = targetPost.likes.filter(user => user._id !== myId);
                return newPosts;
            }
            targetPost.likes.push(me);
            return newPosts;
        })
        like(posts[idx]._id);
    }
    return (
        <div>
            <div className="posts">
                {reversedPosts.map((post, i) => <Post key={post._id} post={post} onClickLike={() => onClickLike(i)} />)}
            </div>
        </div>
    );
};

