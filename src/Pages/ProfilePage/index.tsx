import "./ProfilePage.scss";

import { Typography } from "antd";
const { Title } = Typography;

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { ArrowToHome, ProfileHeader, ProfileInfo, PostAddForm, ButtonFriend } from "@common";
import { ROUTES } from "@utils/constants";
import { userIdSelector } from "@redux/userSlice/selectors";
import { getUserById } from "@utils/api/requests/user";
import { getPostsByUserId } from "@utils/api/requests/post";

import { Posts } from "@common";

export const ProfilePage = () => {
    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);

    const myId = useSelector(userIdSelector);
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

    if (!user) return null;

    return (
        <>
            <ArrowToHome />
            <div className="profileWrapper">
                <div className="profile">
                    <ProfileHeader isMe={isMe} avatar={user.avatar} name={user.name} />
                    {isMe && <Link className="profile-link" to={ROUTES.SETTINGS}>редактировать профиль</Link>}
                    <ProfileInfo name={user.name} surname={user.surname} email={user.email} login={user.login} />
                    {!isMe && <ButtonFriend partner={user} />}
                </div>
                <div className="postsWrapper">
                    {isMe && <PostAddForm onAddNewPost={onAddNewPost} />}
                    {
                        posts.length > 0 && <>
                            <Title level={2}>Посты:</Title>
                            <Posts posts={posts} setPosts={setPosts} />
                        </>
                    }
                </div>
            </div>
        </>
    );
};

