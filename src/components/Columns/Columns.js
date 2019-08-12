import React from 'react';
import Column from "./Column/Column";

const Columns = ({columns}) => {
    return (
        <>
            {columns ? (
                columns.map(({id, title, boardId}) => {
                    return <Column key={id} columnId={id} title={title} boardId={boardId}/>
                })
            ) : null
            }
        </>
    );
};

export default Columns;