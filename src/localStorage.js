export const loadState = () => {
    // console.log('loadState');
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    // console.log('saveState = ', state);

    try {
        const serializedState = JSON.stringify(state);
        // console.log('Serialized State = ', serializedState);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};