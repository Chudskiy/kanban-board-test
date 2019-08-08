import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import CreateTask from "../../CreateTask/CreateTask";
import Tasks from "../../Tasks/Tasks";

const Column = ({title, columnId}) => {
    // const boardId = useSelector(state => state.boards[0].id);
    const tasks = useSelector(state => state.tasks);

    const dispatch = useDispatch();

    console.log('Tasks = ', tasks);

    // const inputChangeHandler = ({target}) => {
    //     setInputText(target.value)
    // };
    //
    // const addColumnHandler = () => {
    //     dispatch({
    //         type: ADD_COLUMN,
    //         payload: {
    //             id: uuidv4(),
    //             title: inputText,
    //             boardId: boardId
    //         }
    //     })
    // };

    return (
        <div
            className="flex flex-col justify-between w-64 mr-6 p-4 bg-gray-300 rounded"
            style={{
                minWidth: '300px'
            }}
        >
            <div className="flex justify-between items-center">
                <h3 className="font-bold">{title}</h3>

                <div>
                    <button className="p-3">C</button>
                    <button className="p-3">R</button>
                </div>
            </div>


            {/*<Tasks tasks={tasks}/>*/}
            <CreateTask columnId={columnId}/>
        </div>
    );
};

export default Column;