import React from 'react';
import CreateColumn from "../../components/CreateColumn/CreateColumn";
import Columns from "../../components/Columns/Columns";
import {useSelector} from "react-redux";

const Board = () => {
    const columns = useSelector(state => state.columns);
    const tasks = useSelector(state => state.tasks);


    console.log(columns);
    console.log('Tasks = ', tasks);

    return (
        <div className="flex justify-between items-start h-full w-full py-12 px-12 overflow-x-scroll">
            <Columns/>

            <CreateColumn/>
        </div>
    );
};


export default Board;