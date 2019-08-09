import React from 'react';
import Task from "./Task/Task";

const Tasks = ({tasks, columnId}) => {
    return (
        <>
            {tasks ? (
                tasks.map((task, index) => (
                        <Task
                            key={task.id}
                            id={task.id}
                            index={index}
                            title={task.title}
                            columnId={columnId}
                            description={task.description}
                        />
                    )
                )
            ) : null
            }
        </>
    );
};

export default Tasks;