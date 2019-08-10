import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {remove_task} from "../../../store/actions/tasks";
import {remove_task_from_column} from "../../../store/actions/columns";
import Modal from "../../UI/Modal/Modal";
import UpdateTask from "../../UpdateTask";
import {show_modal} from "../../../store/actions/UI";

const Task = ({id, index, title, description, columnId, boardId}) => {
    const modalIsShowed = useSelector(({UI}) => UI.modalIsShowed);

    const dispatch = useDispatch();

    const showModal = () => {
        dispatch(show_modal());
    };

    const removeTask = () => {
        const taskId = id;

        dispatch(remove_task({taskId}));
        dispatch(remove_task_from_column({taskId, columnId}));
    };

    return (
        <>
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

            {modalIsShowed ? (
                <Modal isShowed={modalIsShowed}>
                    <UpdateTask id={id} title={title} description={description}/>
                </Modal>
            ) : null
            }
        </>
    );
};

export default Task;