import { RefObject, useEffect } from "react";

interface useAutoScrollProps {
    node: RefObject<HTMLElement> | null;
    length: number | undefined;
}
export const useAutoScroll = ({ node, length }: useAutoScrollProps) => {
    useEffect(() => {
        if (node?.current && node.current.parentElement && length) {
            node.current.parentElement.scroll(0, 10000);
        }
    }, [length])
}