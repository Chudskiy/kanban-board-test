import React from 'react';
import CreateColumn from "../../components/CreateColumn/CreateColumn";
import Columns from "../../components/Columns/Columns";
import {DragDropContext} from "react-beautiful-dnd";
import {useDispatch, useSelector} from "react-redux";
import {getColumn} from "../../store/selectors/columnSelector";
import {UPDATE_TASKS_IN_COLUMN} from "../../store/actions/types";

const reorder = (list, startIndex, endIndex) => {
    // console.log(list);
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

    // const getColumn = id => {
    //     // return columns.find(item => item.id === id).tasks
    // };


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
            // // console.log(getList(source.droppableId));
            // const items = reorder(
            //     getList(source.droppableId),
            //     source.index,
            //     destination.index
            // );
            //
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
            console.log('NOPE');


            // const result = move(
            //     getList(source.droppableId),
            //     getList(destination.droppableId),
            //     source,
            //     destination
            // );

            // console.log('SOURCE COLUMN = ', getColumn(source.droppableId));
            // console.log('DEST COLUMN = ', getColumn(destination.droppableId));

            // console.log('result = ', result);

            console.log('COLLLLLUMN = ', columns[source.droppableId]);

            const result = move(
                // getColumn(source.droppableId),
                // getColumn(destination.droppableId),
                columns[source.droppableId].tasks,
                columns[destination.droppableId].tasks,
                source,
                destination
            );
            console.log('result = ', result);

            updateTasks(destination.droppableId, source.droppableId, result)
            // const newColumns = [...columns];
            // let newColumn = null;
            //
            // for(let columnId in result) {
            //     // console.log('Column id = ', columnId, ' Item = ', result[columnId]);
            //     newColumn = columns.find(column => columnId === column.id);
            //
            //     newColumn.tasks = [...result[columnId]];
            //
            //     newColumns[columnId] = newColumn
            // }

            // setColumns(newColumns);
            //
            // setItems(result.droppable);
            // setSelected(result.droppable2)
            // setSelected(result.droppable2)
            // this.setState({
            //     items: result.droppable,
            //     selected: result.droppable2
            // });
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