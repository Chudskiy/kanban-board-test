import React from 'react';
import CreateColumn from "../../components/CreateColumn/CreateColumn";
import Columns from "../../components/Columns/Columns";
import {DragDropContext} from "react-beautiful-dnd";
import {useDispatch, useSelector} from "react-redux";
import {move, reorder} from "../../DragAndDrop/DragAndDrop";
import {change_column_id_in_task} from "../../store/actions/tasks";
import {reorder_tasks_in_column, update_task_position_in_column} from "../../store/actions/columns";
import {getBoardColumns} from "../../store/selectors/selectors";


const Board = ({match}) => {
    const boardId = match.params.id;

    const columns = useSelector(({columns}) => columns.byId);
    const boardColumns = useSelector(state => getBoardColumns(state, boardId));

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
        dispatch(update_task_position_in_column({
            destColumnId,
            sourceColumnId,
            tasks: {...tasks}
        }));
        dispatch(change_column_id_in_task({destColumnId, taskId}));
    };

    const reorderTasks = ((columnId, tasks) => {
        dispatch(reorder_tasks_in_column({columnId, tasks: [...tasks]}));
    });


    return (
        <div
            className="flex justify-between items-start h-full w-full py-12 px-12 overflow-x-scroll bg-gray-200">
            <DragDropContext onDragEnd={onDragEnd}>
                <Columns columns={boardColumns}/>
            </DragDropContext>

            <CreateColumn boardId={boardId}/>
        </div>
    );
};


export default Board;