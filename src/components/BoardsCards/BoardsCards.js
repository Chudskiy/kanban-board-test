import React from 'react';
import BoardCard from "./BoardCard/BoardCard";

const BoardsCards = ({boards}) => {
    return (
        <div className="flex flex-wrap justify-center">
            {boards ? (
                Object.keys(boards).map((boardId) => {
                    const {id, title} = boards[boardId];
                    return (
                        <BoardCard
                            key={id}
                            id={id}
                            title={title}
                        />
                    )
                })
            ) : null
            }
        </div>
    );
};

export default BoardsCards;