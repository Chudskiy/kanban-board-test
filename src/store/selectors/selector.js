// export const getColumnTasks = (state, tasksIds) => {
//     return tasksIds.map(taskId => {
//         return state.tasks.byId[taskId]
//     })
// };

export const getColumnTasks = (state, columnId) => {
    const tasksIds = state.columns.byId[columnId].tasks;

    return tasksIds.map(taskId => {
        return state.tasks.byId[taskId]
    })
};

export const getBoardColumns = (state, boardId) => {
    const columnIds = state.boards.byId[boardId].columns;

    console.log(columnIds);

    return columnIds.map(columnId => {
        return state.columns.byId[columnId]
    })
};


