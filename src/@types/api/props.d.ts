interface createDialogProps {
    partnerLogin: User["login"];
}

interface ModalsProps<T> {
    open: boolean;
    setOpen: Dispatch<SetStateAction<T>>;
}

interface FieldProps {
    editableStr: string;
    setEditableStr: Dispatch<React.SetStateAction<string>>
    name: string;
}

interface ChangePasswordProps {
    oldPassword: string;
    newPassword: string;
    newPasswordConfirmed: string;
}

interface ChatMessageProps {
    text: string;
    imagesFiles: File[];
}