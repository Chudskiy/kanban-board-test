import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CreateTask from "../../CreateTask/CreateTask";
import Tasks from "../../Tasks/Tasks";
import {getColumnTasks} from "../../../store/selectors/columnSelector";
import {Droppable} from "react-beautiful-dnd";
import {remove_column} from "../../../store/actions/columns";
import Modal from "../../UI/Modal/Modal";
import UpdateAndDeleteButtons
    from "../../UI/UpdateAndDeleteButtons/UpdateAndDeleteButtons";
import UpdateColumn from "../../UpdateColumn/UpdateColumn";


const Column = ({title, columnId, boardId}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [modalIsShowed, setModalIsShowed] = useState(false);

    const tasks = useSelector(state => getColumnTasks(state, columnId));
    // const modalIsShowed = useSelector(({UI}) => UI.modalIsShowed);

    const dispatch = useDispatch();

    const removeColumn = () => {
        dispatch(remove_column({columnId}));
    };


    return (
        <div
            className="flex flex-col justify-between w-64 mr-6 p-4 bg-gray-300 rounded"
            style={{minWidth: '300px'}}
        >
            <div
                className="flex justify-between items-center py-3"
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <h3 className="font-bold">{title}</h3>

                {isHovered ? (
                    <UpdateAndDeleteButtons
                        updateAction={() => setModalIsShowed(true)}
                        removeAction={removeColumn}/>
                ) : null
                }
            </div>
            <Droppable droppableId={columnId}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={{
                            height: !tasks.length ? '56px' : ''
                        }}
                        // getListStyle(snapshot.isDraggingOver
                    >
                        <Tasks tasks={tasks} columnId={columnId}
                               boardId={boardId}/>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            <CreateTask columnId={columnId}/>

            <Modal isShowed={modalIsShowed} hide={() => setModalIsShowed(false)}>
                <UpdateColumn
                    columnId={columnId} title={title}
                    hideModal={() => setModalIsShowed(false)}
                />
            </Modal>
        </div>
    );
};

export default Column;