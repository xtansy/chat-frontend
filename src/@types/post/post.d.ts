interface Post {
    _id: string;
    text: string;
    user: User;
    likes: User[];
    image?: string;
}