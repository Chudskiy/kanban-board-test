import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import CreateTask from "../../CreateTask/CreateTask";
import Tasks from "../../Tasks/Tasks";
import {getColumnTasks} from "../../../store/selectors/columnSelector";
import {Droppable} from "react-beautiful-dnd";
import {remove_column} from "../../../store/actions/columns";
import Modal from "../../UI/Modal/Modal";
import UpdateColumn from "../../UpdateColumn/UpdateColumn";


const Column = ({title, columnId, boardId}) => {
    const tasks = useSelector(state => getColumnTasks(state, columnId));
    const modalIsShowed = useSelector(({UI}) => UI.modalIsShowed);

    const dispatch = useDispatch();

    const removeColumn = () => {
        dispatch(remove_column({columnId}));
    };

    return (
        <div
            className="flex flex-col justify-between w-64 mr-6 p-4 bg-gray-300 rounded"
            style={{minWidth: '300px'}}
        >
            <div className="flex justify-between items-center">
                <h3 className="font-bold">{title}</h3>

                <div>
                    <button className="p-3">C</button>
                    <button className="p-3" onClick={removeColumn}>R</button>
                </div>
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

            {modalIsShowed ? (
                <Modal>
                    <UpdateColumn columnId={columnId}/>
                </Modal>
            ) :null
            }
        </div>
    );
};

export default Column;