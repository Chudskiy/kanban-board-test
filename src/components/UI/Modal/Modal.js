import React from 'react';

const Modal = ({isShowed, hideModal, children}) => {
    if (isShowed) {
        return (
            <div
                className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
                <div
                    className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
                    onClick={hideModal}
                />

                <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    {children}
                    {/*<div*/}
                    {/*    className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50">*/}

                    {/*    <span className="text-sm">(Esc)</span>*/}
                    {/*</div>*/}

                    {/*<div className="modal-content py-4 text-left px-6">*/}
                    {/*    <div className="flex justify-between items-center pb-3">*/}
                    {/*        <p className="text-2xl font-bold">Simple Modal!</p>*/}
                    {/*        <div className="modal-close cursor-pointer z-50">*/}

                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <p>Modal content can go here</p>*/}
                    {/*    <p>...</p>*/}
                    {/*    <p>...</p>*/}
                    {/*    <p>...</p>*/}
                    {/*    <p>...</p>*/}

                    {/*    <div className="flex justify-end pt-2">*/}
                    {/*        <button*/}
                    {/*            className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Action*/}
                    {/*        </button>*/}
                    {/*        <button*/}
                    {/*            className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">Close*/}
                    {/*        </button>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                </div>
            </div>
        )
    } else {
        return null
    }
};
export default Modal;