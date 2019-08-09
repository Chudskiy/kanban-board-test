import React from 'react';
import {Draggable} from "react-beautiful-dnd";

const Task = ({id, index, title, description}) => {
    return (
        <Draggable
            key={id}
            draggableId={id}
            index={index}
        >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    // style={getItemStyle(
                    //     snapshot.isDragging,
                    //     provided.draggableProps.style
                    // )}
                >
                    <div className="flex justify-between p-4 bg-gray-400 mb-1">
                        <h3>{title}</h3>

                        <div>
                            <button>C</button>
                            <button>R</button>
                        </div>
                    </div>
                    {provided.placeholder}
                </div>
            )}

        </Draggable>
    );
};

export default Task;