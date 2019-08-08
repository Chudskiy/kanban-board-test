import React from 'react';
import Column from "./Column/Column";
import {useSelector} from "react-redux";
import Task from "../Tasks/Task/Task";

const Columns = (props) => {
    // className="flex flex-col justify-between lg:w-1/6 w-2/6 p-4 bg-gray-300 rounded"
    const columns = useSelector(state => state.columns.byId);

    console.log('Columns = ', columns);
    return (
        <>
            {columns ? (
                Object.keys(columns).map((columnId) => {
                    const {id, title} = columns[columnId];
                    return <Column key={id} columnId={id} title={title}/>
                })
            ) : null
            }
        </>
    );
};

export default Columns;