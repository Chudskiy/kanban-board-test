export const getColumnTasks = (state, tasksIds) => {
    return tasksIds.map(taskId => {
        return state.tasks.byId[taskId]
    })
};

export const getColumn = (state, columnId) => {
    return state.columns.byId[columnId]
};

