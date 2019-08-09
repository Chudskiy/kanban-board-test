import React from 'react';
import CreateColumn from "../../components/CreateColumn/CreateColumn";
import Columns from "../../components/Columns/Columns";
import {DragDropContext} from "react-beautiful-dnd";
import {useDispatch, useSelector} from "react-redux";
import {
    CHANGE_COLUMN_ID_IN_TASK,
    HIDE_MODAL,
    REORDER_TASKS_IN_COLUMN,
    UPDATE_TASKS_IN_COLUMN
} from "../../store/actions/types";
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

            updateTasks(destination.droppableId, source.droppableId, result, result.task)
        }
    };

    const updateTasks = (destColumnId, sourceColumnId, tasks, taskId) => {
        dispatch({
            type: UPDATE_TASKS_IN_COLUMN,
            payload: {
                destColumnId,
                sourceColumnId,
                tasks: {...tasks}
            }
        });

        dispatch({
            type: CHANGE_COLUMN_ID_IN_TASK,
            payload: {
                destColumnId,
                taskId
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

    // let modalChildren = null;
    //
    // if (modal.data.type === 'update_task')  {
    //     modalChildren = <UpdateTask task={task} hideModal={hideModal}/>
    //
    // } else if (modal.data.type === 'remove_column'){
    //     // modalChildren = <UpdateColumn task={task} hideModal={hideModal}/>
    //
    // }
    // const modalChildren = (type, data, hideModal) => {
    //     switch (type) {
    //         case 'update_task':
    //             return <UpdateTask task={data} hideModal={hideModal}/>;
    //         case 'update_column':
    //             return <UpdateColumn column={data} hideModal={hideModal}/>;
    //         default:
    //             return null
    //     }
    // };

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