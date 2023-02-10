import { format } from "date-fns";
import ruLang from "date-fns/locale/ru";

export const formatDateOutMessage = (date: string): string => {
    return format(new Date(date), "d MMMM", {
        locale: ruLang,
    });
};