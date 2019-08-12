import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {REMOVE_TASK, REMOVE_TASK_FROM_COLUMN} from "../store/actions/types";

const TaskDetail = (props) => {
    const task = useSelector(state => state.tasks.byId[props.match.params.taskId]);

    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch({
            type: REMOVE_TASK,
            payload: {
                taskId: task.id
            }
        });

        dispatch({
            type: REMOVE_TASK_FROM_COLUMN,
            payload: {
                taskId: task.id,
                columnId: task.columnId
            }
        });

        props.history.goBack();
    };


    return (
        <div className="flex justify-center items-center bg-gray-300 w-full h-full">
            <div className="flex flex-col items-center w-1/3 p-10 m-auto bg-white">
                {task ? <h1 className="mb-10">{task.title}</h1> : null}
                {task ? <p className="mb-10">{task.description}</p> : null}

                <div className="flex justify-between mx-auto mt-5">
                    <button className="p-3 mr-4 bg-gray-400 rounded" onClick={removeTask}>Delete</button>
                    <button className="p-3 border border-gray-400 rounded" onClick={props.history.goBack}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default TaskDetail;