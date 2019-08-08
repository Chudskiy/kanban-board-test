import React from 'react';
import Task from "./Task/Task";

const Tasks = ({tasks}) => {
    return (
        <>
            {tasks ? (
                tasks.map(task => <Task title={task.title}/>)
            ) : null
            }
        </>
    );
};

export default Tasks;