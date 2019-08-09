import React, {useState} from 'react';
import CreateColumn from "../../components/CreateColumn/CreateColumn";
import Columns from "../../components/Columns/Columns";
import {DragDropContext} from "react-beautiful-dnd";
import {useDispatch, useSelector} from "react-redux";
import {REORDER_TASKS_IN_COLUMN, UPDATE_TASKS_IN_COLUMN} from "../../store/actions/types";
import Modal from "../../components/UI/Modal/Modal";
import CreateTask from "../../components/CreateTask/CreateTask";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);

    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};


const Board = () => {
    const [isModalShowed, setIsModalShowed] = useState(true);

    const columns = useSelector(state => state.columns.byId);

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

    const hideModalHandler = () => {
        setIsModalShowed(false)
    };

    return (
        <div className="flex justify-between items-start h-full w-full py-12 px-12 overflow-x-scroll bg-gray-200">
            <DragDropContext onDragEnd={onDragEnd}>
            <Columns/>
            </DragDropContext>

            <CreateColumn/>

            <Modal isShowed={isModalShowed} hideModal={hideModalHandler}>
                <CreateTask/>
            </Modal>
        </div>
    );
};


export default Board;