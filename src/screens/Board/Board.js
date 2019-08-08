import React from 'react';
import CreateColumn from "../../components/CreateColumn/CreateColumn";
import Columns from "../../components/Columns/Columns";
import {DragDropContext} from "react-beautiful-dnd";
import {useDispatch, useSelector} from "react-redux";
import {getColumn} from "../../store/selectors/columnSelector";
import {REORDER_TASKS_IN_COLUMN, UPDATE_TASKS_IN_COLUMN} from "../../store/actions/types";

const reorder = (list, startIndex, endIndex) => {
    console.log(list);
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    console.log('sources', source);
    console.log('dest', destination);

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
    const tasks = useSelector(state => state.tasks.byId);
    const columns = useSelector(state => state.columns.byId);

    const dispatch = useDispatch();

    const onDragEnd = result => {
        const {source, destination} = result;

        console.log('SOURCE = ', source);
        console.log('DEST = ', destination);

        // dropped outside the list
        if (!destination) {
            return;
        }

        // console.log(useSelector(state => getColumn(state, )));

        // console.log('SOURCE = ', source);
        // console.log('DESTINATION = ', destination);

        if (source.droppableId === destination.droppableId) {
            // console.log('YEAH');
            //
            // console.log(getList(source.droppableId));
            const tasks = reorder(
                columns[source.droppableId].tasks,
                source.index,
                destination.index
            );

            console.log('ITEMS = ',tasks);


            reorderTasks(source.droppableId, tasks)
            // // console.log('Items = ', items);
            //
            // setItems(items);
            // let state = {items};
            //
            // if (source.droppableId === 'droppable2') {
            //     // state = {selected: items};
            //     setSelected(items)
            // }

            // setSelected(items)
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


    return (
        <div className="flex justify-between items-start h-full w-full py-12 px-12 overflow-x-scroll">
            <DragDropContext onDragEnd={onDragEnd}>
            <Columns/>
            </DragDropContext>

            <CreateColumn/>
        </div>
    );
};


export default Board;