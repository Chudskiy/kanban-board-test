import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import {useDispatch} from "react-redux";
import {REMOVE_TASK_FROM_COLUMN, SHOW_MODAL} from "../../../store/actions/types";
import {Link} from "react-router-dom";
import {remove_task} from "../../../store/actions/tasks";
import {remove_task_from_column} from "../../../store/actions/columns";

const Task = ({id, index, title, description, columnId, boardId}) => {
    const dispatch = useDispatch();

    const showModal = () => {
        dispatch({
            type: SHOW_MODAL,
            payload: {
                data: {
                    taskId: id
                }
            }
        })
    };

    const removeTask = () => {
        const taskId = id;

        dispatch(remove_task({taskId}));
        dispatch(remove_task_from_column({taskId, columnId}));
    };

    return (
        <Draggable
            key={id}
            draggableId={id}
            index={index}
        >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    // style={getItemStyle(
                    //     snapshot.isDragging,
                    //     provided.draggableProps.style
                    // )}
                >
                    <div className="flex justify-between p-4 bg-gray-400">
                        <h3><Link
                            to={`/boards/${boardId}/tasks/${id}`}>{title}</Link>
                        </h3>

                        <div>
                            <button onClick={showModal}>C</button>
                            <button onClick={removeTask}>R</button>
                        </div>
                    </div>
                    {provided.placeholder}
                </div>
            )}

        </Draggable>
    );
};

export default Task;