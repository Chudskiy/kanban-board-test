export const getColumnTasks = (state, tasksIds) => {
    return tasksIds.map(taskId => {
        return state.tasks.byId[taskId]
    })
};

