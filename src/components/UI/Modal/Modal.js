import React from 'react';
import {HIDE_MODAL} from "../../../store/actions/types";
import {useDispatch} from "react-redux";

const Modal = ({isShowed, children, hide}) => {
    const dispatch = useDispatch();

    const hideModal = () => {
        dispatch({
            type: HIDE_MODAL,
        })
    };

    if (isShowed) {
        return (
            <div
                className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
                <div
                    className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
                    onClick={hide}
                />

                <div
                    className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    {children}
                </div>
            </div>
        )
    } else {
        return null
    }
};
export default Modal;