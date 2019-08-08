import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import CreateTask from "../../CreateTask/CreateTask";
import Tasks from "../../Tasks/Tasks";
import {getColumnTasks} from "../../../store/selectors/columnSelector";
import {Droppable} from "react-beautiful-dnd";


const Column = ({title, columnId}) => {
    const tasksIds = useSelector(state => state.columns.byId[columnId].tasks);

    const tasks = useSelector(state => getColumnTasks(state, tasksIds));

    const dispatch = useDispatch();

    return (
        <Droppable droppableId={columnId}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    // style={getListStyle(snapshot.isDraggingOver)}
                >
                    <div
                        className="flex flex-col justify-between w-64 mr-6 p-4 bg-gray-300 rounded"
                        style={{minWidth: '300px'}}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold">{title}</h3>

                            <div>
                                <button className="p-3">C</button>
                                <button className="p-3">R</button>
                            </div>
                        </div>

                        <Tasks tasks={tasks}/>
                        <CreateTask columnId={columnId}/>
                    </div>
                </div>
            )}
        </Droppable>
    );
};

export default Column;