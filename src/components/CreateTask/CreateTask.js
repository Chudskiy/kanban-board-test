import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import uuidv4 from 'uuid/v4'
import {add_task} from "../../store/actions/tasks";
import {add_task_to_column} from "../../store/actions/columns";

const CreateColumn = ({columnId}) => {
    const [inputText, setInputText] = useState('');

    const dispatch = useDispatch();

    const inputChangeHandler = ({target}) => {
        setInputText(target.value)
    };

    const onKeyDownHandler = ({key}) => {
        if (key === 'Enter') {
            setInputText('');
            addTaskHandler()
        }
    };

    const addTaskHandler = () => {
        if (inputText.trim().length === 0) {
            return
        }

        const taskId = uuidv4();

        const addTaskPayload = {
            id: taskId,
            createdAt: Date.now(),
            title: inputText,
            columnId: columnId
        };

        const addTaskToColumnPayload = {
            taskId, columnId: columnId
        };

        dispatch(add_task(addTaskPayload));
        dispatch(add_task_to_column(addTaskToColumnPayload))
    };

    return (
        <div
            className="flex justify-between items-center lg:w-64 mt-5"
            style={{minWidth: '250px'}}
        >
            <input
                onChange={inputChangeHandler}
                onKeyDown={onKeyDownHandler}
                value={inputText}
                className="p-2 w-full bg-gray-100 border border-gray-500 rounded"
                type="text"
                placeholder="Add new task"
            />

            <button onClick={addTaskHandler}
                    className="p-2 bg-gray-300 hover:bg-gray-500 bg-gray-400 ml-5 rounded">Add
            </button>
        </div>
    );
};

export default CreateColumn;