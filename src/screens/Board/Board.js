import React from 'react';
import CreateColumn from "../../components/CreateColumn/CreateColumn";
import Columns from "../../components/Columns/Columns";
import {DragDropContext} from "react-beautiful-dnd";
import {useDispatch, useSelector} from "react-redux";
import {move, reorder} from "../../DragAndDrop/DragAndDrop";
import {change_column_id_in_task} from "../../store/actions/tasks";
import {
    reorder_tasks_in_column,
    reorder_tasks_in_columns,
    update_task_position_in_column
} from "../../store/actions/columns";


const Board = () => {
    const columns = useSelector(({columns}) => columns.byId);

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

            console.log(tasks);

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
        const updateTaskPayload = {
            destColumnId,
            sourceColumnId,
            tasks: {...tasks}
        };
        const changeColumnIdPayload = {destColumnId, taskId};

        dispatch(update_task_position_in_column(updateTaskPayload));
        dispatch(change_column_id_in_task(changeColumnIdPayload));
    };

    const reorderTasks = ((columnId, tasks) => {
        const payload = {columnId, tasks: [...tasks]};

        dispatch(reorder_tasks_in_column(payload));
    });


    return (
        <div
            className="flex justify-between items-start h-full w-full py-12 px-12 overflow-x-scroll bg-gray-200">
            <DragDropContext onDragEnd={onDragEnd}>
                <Columns/>
            </DragDropContext>

            <CreateColumn/>
        </div>
    );
};


export default Board;