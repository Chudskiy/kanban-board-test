import React from 'react';
import {Draggable} from "react-beautiful-dnd";

const Task = ({id, index, title}) => {
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
                    <div className="bg-gray-600">
                        {title}
                    </div>
                    {provided.placeholder}
                </div>
            )}

        </Draggable>
    );
};

export default Task;