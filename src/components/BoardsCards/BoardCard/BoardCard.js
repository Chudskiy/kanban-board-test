import React from 'react';
import {Link} from "react-router-dom";

const BoardCard = ({id, title}) => {
    return (
        <div className="flex justify-center items-center w-64 h-32 mt-12 mr-12 border border-black rounded">
            <Link to={`/boards/${id}`}>{title}</Link>
        </div>
    );
};

export default BoardCard;