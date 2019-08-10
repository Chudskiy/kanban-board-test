import {HIDE_MODAL, SHOW_MODAL} from "./types";

export const show_modal = () => {
    return {
        type: SHOW_MODAL,
    }
};

export const hide_modal = () => {
    return {
        type: HIDE_MODAL
    }
};