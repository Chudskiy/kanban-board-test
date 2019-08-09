import React from 'react';
import Column from "./Column/Column";
import {useSelector} from "react-redux";

const Columns = (props) => {
    // className="flex flex-col justify-between lg:w-1/6 w-2/6 p-4 bg-gray-300 rounded"
    const columns = useSelector(state => state.columns.byId);

    return (
        <>
            {columns ? (
                Object.keys(columns).map((columnId) => {
                    const {id, title, boardId} = columns[columnId];
                    return <Column key={id} columnId={id} title={title} boardId={boardId}/>
                })
            ) : null
            }
        </>
    );
};

export default Columns;