import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {update_column} from "../../store/actions/columns";

const UpdateColumn = (props) => {
    const [title, setTitle] = useState(props.title);

    const dispatch = useDispatch();

    const onTitleInputChange = ({target}) => {
        setTitle(target.value)
    };

    const updateColumn = () => {
        dispatch(update_column({
            columnId: props.columnId,
            title
        }));

        props.hideModal();
    };

    return (
        <div className="flex flex-col justify-between p-4 bg-gray-100">
            <h3 className="text-3xl text-center text-gray-900">Update Column</h3>

            <label className="text-xl mt-3 mb-2 block text-gray-800">
                Title
            </label>
            <input
                className="p-2 bg-white border border-gray-600 rounded"
                type="text"
                value={title}
                maxLength={20}
                onChange={onTitleInputChange}
            />


            <div className="flex justify-between mx-auto mt-5">
                <button
                    className="p-3 mr-4 bg-gray-400 rounded"
                    onClick={updateColumn}
                >
                    Update
                </button>
                <button
                    className="p-3 border border-gray-400 rounded"
                    onClick={props.hideModal}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default UpdateColumn;