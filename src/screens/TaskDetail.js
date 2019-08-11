import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {remove_task} from "../store/actions/tasks";
import {remove_task_from_column} from "../store/actions/columns";

const TaskDetail = ({match, history}) => {
    const task = useSelector(({tasks}) => tasks.byId[match.params.taskId]);

    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch(remove_task({taskId: task.id}));
        dispatch(remove_task_from_column({
            taskId: task.id,
            columnId: task.columnId
        }));

        history.goBack();
    };


    return (
        <div
            className="flex justify-center items-center bg-gray-300 w-full h-full">
            <div
                className="flex flex-col items-center w-1/3 p-10 m-auto bg-white">
                {task ? (
                    <h1 className="p-3 mb-10 border border-gray-400">
                        <strong>Title: </strong>{task.title}
                    </h1>
                ) : null
                }
                {task ? (
                    <p className="p-3 mb-10 h-32 overflow-y-scroll">
                        <strong>Description: </strong>
                        {task.description}
                    </p>
                ) : null
                }
                {task ? (
                    <p className="mb-10">
                        <strong>Updated At: </strong>
                        {moment(task.updatedAt).format('MMMM Do YYYY, h:mm a')}
                    </p>
                ) : null
                }

                <div className="flex justify-between mx-auto mt-5">
                    <button className="p-3 mr-4 bg-gray-400 rounded"
                            onClick={removeTask}>Delete
                    </button>
                    <button className="p-3 border border-gray-400 rounded"
                            onClick={history.goBack}>Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskDetail;