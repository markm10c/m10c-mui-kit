import { MutableRefObject } from 'react';

interface PopoverController<T> {
    anchorRef: MutableRefObject<T | null>;
    handleOpen: () => void;
    handleClose: () => void;
    handleToggle: () => void;
    open: boolean;
}
declare function usePopover<T = HTMLElement>(): PopoverController<T>;

export { usePopover };
