import React from 'react';
import CreateColumn from "../../components/CreateColumn/CreateColumn";
import Columns from "../../components/Columns/Columns";

const Board = () => {
    return (
        <div className="flex justify-between items-start h-full w-full py-12 px-12 overflow-x-scroll">
            <Columns/>

            <CreateColumn/>
        </div>
    );
};


export default Board;