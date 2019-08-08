import React from 'react';
import Column from "./Column/Column";
import {useSelector} from "react-redux";

const Columns = (props) => {
    // className="flex flex-col justify-between lg:w-1/6 w-2/6 p-4 bg-gray-300 rounded"
    const columns = useSelector(state => state.columns);

    // console.log(columns);
    return (
        <>
            {columns ? (
                columns.map(({id, title}) => <Column key={id} title={title} columnId={id}/>)
            ) : null
            }
        </>
    );
};

export default Columns;