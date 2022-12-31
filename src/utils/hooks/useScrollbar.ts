import { RefObject, useEffect } from "react"
import { OverlayScrollbars } from 'overlayscrollbars'

interface useScrollbarProps {
    node: RefObject<HTMLElement> | null;
    visible: boolean;
}

export const useScrollbar = ({ node, visible }: useScrollbarProps) => {

    useEffect(() => {
        let scrollbar: OverlayScrollbars | undefined;

        if (node?.current && visible) {
            scrollbar = OverlayScrollbars(node.current, {});
        }

        return () => {
            if (scrollbar) {
                scrollbar.destroy();
            }
        }

    }, [node, visible])

}