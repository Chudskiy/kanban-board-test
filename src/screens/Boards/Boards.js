import React from 'react';
import BoardsCards from "../../components/BoardsCards/BoardsCards";
import CreateBoard from "../../components/CreateBoard/CreateBoard";
import {useSelector} from "react-redux";

const Boards = () => {
    const boards = useSelector(({boards}) => boards.byId);

    return (
        <div className="flex flex-col justify-center items-center w-full h-full p-12 overflow-y-scroll">
            <CreateBoard/>
            <BoardsCards boards={boards}/>
        </div>
    );
};

export default Boards;