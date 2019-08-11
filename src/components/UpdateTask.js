import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {hide_modal} from "../store/actions/UI";
import {update_task} from "../store/actions/tasks";

const UpdateTask = (props) => {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);

    const dispatch = useDispatch();

    const onTitleInputChange = ({target}) => {
        setTitle(target.value)
    };

    const onDescrInputChange = ({target}) => {
        setDescription(target.value)
    };

    const updateTask = () => {
        const payload = {
            taskId: props.id,
            updatedAt: Date.now(),
            title,
            description
        };

        dispatch(update_task(payload));
        dispatch(hide_modal());
    };

    const hideModal = () => {
        dispatch(hide_modal());
    };

    return (
        <div className="flex flex-col justify-between p-4 bg-gray-100">
            <h3 className="text-3xl text-center text-gray-900">Update Task</h3>

            <label className="text-xl mt-3 mb-2 block text-gray-800">
                Title
            </label>
            <input
                className="p-2 bg-white border border-gray-600 rounded"
                type="text" value={title} onChange={onTitleInputChange}
            />

            <label className="text-xl mt-3 mb-2 block text-gray-800">
                Description
            </label>
            <textarea
                className="p-2 bg-white border border-gray-600 rounded"
                type="text"
                value={description}
                onChange={onDescrInputChange}
                placeholder="Description..."
            />

            <div className="flex justify-between mx-auto mt-5">
                <button
                    className="p-3 mr-4 bg-gray-400 rounded"
                    onClick={updateTask}
                >
                    Update
                </button>
                <button
                    className="p-3 border border-gray-400 rounded"
                    onClick={hideModal}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default UpdateTask;