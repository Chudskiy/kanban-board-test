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

export const getColumn = (state, columnId) => {
    return state.columns.byId[columnId]
};

