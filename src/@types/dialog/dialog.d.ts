interface Message {
    text: string;
    userId: string;
    _id: string;
    createdAt: string;
    photos?: string[];
}

interface Dialog {
    owner: User;
    partner: User;
    messages: Message[];
    lastMessage: string;
    _id: string;
}