import { format } from "date-fns";
import ruLang from "date-fns/locale/ru";

export const formatDateInMessage = (date: string): string => {
    return format(new Date(date), "p", {
        locale: ruLang,
    });
};