import React from 'react';
import IosBrush from "react-ionicons/lib/IosBrush";
import IosTrash from "react-ionicons/lib/IosTrash";

const UpdateAndDeleteButtons = ({updateAction, removeAction}) => {
    return (
        <div className="flex justify-between w-12">
            <button onClick={updateAction}>
                <IosBrush fontSize={'21px'} color={'gray'}/>
            </button>
            <button onClick={removeAction}>
                <IosTrash fontSize={'24px'} color={'gray'}/>
            </button>
        </div>
    );
};

export default UpdateAndDeleteButtons;