import React from 'react';
import Task from "./Task/Task";

const Tasks = ({tasks}) => {
    return (
        <>
            {tasks ? (
                tasks.map((task, index) => <Task key={task.id} id={task.id} index={index} title={task.title}/>)
            ) : null
            }
        </>
    );
};

export default Tasks;