import { format, formatDistanceToNow } from "date-fns";
import ruLang from "date-fns/locale/ru";

const ONE_DAY_IN_MS = 86400000;

export const formatDateInPost = (date: string): string => {
    const dateObj = new Date(date);

    const isRecent = Date.now() - dateObj.getTime() <= ONE_DAY_IN_MS;

    if (isRecent) {
        const timeAgo = formatDistanceToNow(dateObj, { addSuffix: true, locale: ruLang });
        return timeAgo;
    }

    const formattedDate = format(dateObj, "dd.MM.yyyy HH:mm", {
        locale: ruLang,
    });

    return formattedDate
};