interface ServerToClientEvents {
    message: (obj: { dialogId: string; message: Message }) => void;
    createDialog: (obj: { text: string }) => void;
    deleteDialog: (obj: { text: string }) => void;
}

interface ClientToServerEvents {
    join: (obj: { dialogIds: Dialog["_id"][], userId: User["_id"] }) => void;
    message: (obj: { dialogId: string; message: ChatMessage, userId: string }) => void;
}