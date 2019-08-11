import React, {useState} from 'react';
import {Draggable} from "react-beautiful-dnd";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {remove_task} from "../../../store/actions/tasks";
import {remove_task_from_column} from "../../../store/actions/columns";
import Modal from "../../UI/Modal/Modal";
import UpdateTask from "../../UpdateTask";
import {show_modal} from "../../../store/actions/UI";
import UpdateAndDeleteButtons
    from "../../UI/UpdateAndDeleteButtons/UpdateAndDeleteButtons";

const Task = ({id, index, title, description, columnId, boardId}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [modalIsShowed, setModalIsShowed] = useState(false);

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
                        <div
                            className="flex justify-between p-4 bg-gray-400"
                            onMouseOver={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <h3><Link
                                to={`/boards/${boardId}/tasks/${id}`}>{title}</Link>
                            </h3>

                            {isHovered ? (
                                <UpdateAndDeleteButtons
                                    updateAction={() => setModalIsShowed(true)}
                                    removeAction={removeTask}
                                />
                            ) : null}

                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Draggable>

            {modalIsShowed ? (
                <Modal isShowed hideModal={() => setModalIsShowed(false)}>
                    <UpdateTask
                        id={id}
                        title={title}
                        description={description}
                        hideModal={() => setModalIsShowed(false)}
                    />
                </Modal>
            ) : null
            }
        </>
    );
};

export default Task;