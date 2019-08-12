import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {remove_task} from "../../store/actions/tasks";
import {remove_task_from_column} from "../../store/actions/columns";
import {Redirect} from "react-router-dom";

const TaskDetail = ({match, history}) => {
    const task = useSelector(({tasks}) => tasks.byId[match.params.taskId]);
    const column = useSelector(({columns}) => {
        if (task) {
            return columns.byId[task.columnId]
        } else {
            return null;
        }
    });
    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch(remove_task({taskId: task.id}));
        dispatch(remove_task_from_column({
            taskId: task.id,
            columnId: task.columnId
        }));

        history.goBack();
    };

    let renderTask = null;

    if (task) {
        renderTask = (
            <div
                className="flex justify-center items-center bg-gray-300 w-full h-full">
                <div
                    className="flex flex-col items-center w-1/3 p-10 m-auto bg-white">
                    <h1 className="p-3 mb-10 border border-gray-400">
                        <strong>Title: </strong>{task.title}
                    </h1>

                    <p><strong>Column Title:</strong> {column.title}</p>
                    {task.description ? (
                        <p className="p-3 mb-10 h-32 overflow-y-scroll w-full">
                            <strong>Description: </strong>
                            {task.description}
                        </p>
                    ) : (
                        <p className="p-4 mb-10">No description yet.</p>
                    )}

                    <p className="mb-10">
                        <strong>Updated At: </strong>
                        {task.updatedAt ? (
                            moment(task.updatedAt).format('MMMM Do YYYY, h:mm a')
                        ) : (
                            moment(task.createdAt).format('MMMM Do YYYY, h:mm a')
                        )}
                    </p>

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
        )
    } else {
        renderTask = <Redirect to='/boards'/>
    }

    return renderTask;
};

export default TaskDetail;