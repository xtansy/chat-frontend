import "./ProfilePage.scss";

import { Typography, Button } from "antd";
const { Title } = Typography;

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { ArrowToHome, ProfileHeader, ProfileInfo, PostAddForm } from "@common";
import { ROUTES } from "@utils/constants";
import { Posts } from "./Posts";
import { userIdSelector, userSelector } from "@redux/userSlice/selectors";
import { getUserById } from "@utils/api/requests/user";
import { getPostsByUserId, like } from "@utils/api/requests/post";

export const ProfilePage = () => {
    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);

    const myId = useSelector(userIdSelector);
    const me = useSelector(userSelector);
    const { userId } = useParams();
    const isMe = myId === userId;

    useEffect(() => {
        if (userId) {
            Promise.all([getUserById(userId), getPostsByUserId(userId)])
                .then(([{ data: user }, { data: posts }]) => {
                    setUser(user);
                    setPosts(posts);
                })
        }
    }, [])

    const onAddNewPost = (post: Post) => {
        setPosts(old => [...old, post]);
    }

    const onClickLike = (idx: number) => {
        if (!me || !myId) return;
        // FIX ME
        setPosts(old => {
            const newPosts = old.slice();
            const targetPost = newPosts[idx];

            const isExistMyLike = targetPost.likes.find(user => user._id === myId);

            if (isExistMyLike) {
                console.log("есть мой лайк");
                targetPost.likes = targetPost.likes.filter(user => user._id !== myId);
                return newPosts;
            }
            targetPost.likes.push(me);
            return newPosts;
        })
        like(posts[idx]._id);
    }

    if (!user) return null;

    return (
        <>
            <ArrowToHome />
            <div className="profileWrapper">
                <div className="profile">
                    <ProfileHeader isMe={isMe} avatar={user.avatar} name={user.name} />
                    {isMe && <Link className="profile-link" to={ROUTES.SETTINGS}>редактировать профиль</Link>}
                    <ProfileInfo name={user.name} surname={user.surname} email={user.email} login={user.login} />
                    {!isMe && <Button>Добавить в друзья</Button>}
                </div>
                <div className="postsWrapper">
                    {isMe && <PostAddForm onAddNewPost={onAddNewPost} />}
                    {
                        posts.length > 0 && <>
                            <Title level={2}>Посты:</Title>
                            <Posts posts={posts} onClickLike={onClickLike} />
                        </>
                    }
                </div>
            </div>
        </>
    );
};

