import React from 'react';
import UpdateTask from "../../UpdateTask";
import UpdateColumn from "../../UpdateColumn/UpdateColumn";

const TestModal = ({isShowed, children, hideModal, type, data}) => {
    // let modalBody = null;
    //
    // switch (type) {
    //     case 'update_task':
    //         modalBody = <UpdateTask task={data} hideModal={hideModal}/>;
    //         break;
    //     case 'update_column':
    //         modalBody = <UpdateColumn column={data} hideModal={hideModal}/>;
    //         break;
    //
    //     default:
    //         return null
    // }


    if (isShowed) {
        return (
            <div
                className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
                <div
                    className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
                    onClick={hideModal}
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
export default TestModal;