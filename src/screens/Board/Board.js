import React from 'react';
import CreateColumn from "../../components/CreateColumn/CreateColumn";
import Columns from "../../components/Columns/Columns";
import {DragDropContext} from "react-beautiful-dnd";
import {useDispatch, useSelector} from "react-redux";
import {HIDE_MODAL, REORDER_TASKS_IN_COLUMN, UPDATE_TASKS_IN_COLUMN} from "../../store/actions/types";
import Modal from "../../components/UI/Modal/Modal";
import {move, reorder} from "../../DragAndDrop/DragAndDrop";
import UpdateTask from "../../components/UpdateTask";


const Board = () => {
    const columns = useSelector(state => state.columns.byId);
    const modal = useSelector(state => state.UI.modal);
    const task = useSelector(state => state.tasks.byId[modal.data.taskId]);

    const dispatch = useDispatch();

    const onDragEnd = result => {
        const {source, destination} = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const tasks = reorder(
                columns[source.droppableId].tasks,
                source.index,
                destination.index
            );

            reorderTasks(source.droppableId, tasks)
        } else {
            const result = move(
                columns[source.droppableId].tasks,
                columns[destination.droppableId].tasks,
                source,
                destination
            );

            updateTasks(destination.droppableId, source.droppableId, result)
        }
    };

    const updateTasks = (destColumnId, sourceColumnId, tasks) => {
        dispatch({
            type: UPDATE_TASKS_IN_COLUMN,
            payload: {
                destColumnId,
                sourceColumnId,
                tasks: {...tasks}
            }
        })
    };

    const reorderTasks = ((columnId, tasks) => {
        dispatch({
            type: REORDER_TASKS_IN_COLUMN,
            payload: {
                columnId,
                tasks: [...tasks]
            }
        })
    });


    const hideModal = () => {
        dispatch({
            type: HIDE_MODAL,
        })
    };




    return (
        <div className="flex justify-between items-start h-full w-full py-12 px-12 overflow-x-scroll bg-gray-200">
            <DragDropContext onDragEnd={onDragEnd}>
                <Columns/>
            </DragDropContext>

            <CreateColumn/>

            <Modal isShowed={modal.isShowed} hideModal={hideModal}>
                <UpdateTask task={task} hideModal={hideModal}/>
            </Modal>
        </div>
    );
};


export default Board;