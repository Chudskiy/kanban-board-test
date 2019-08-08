import {ADD_TASK} from "../actions/types";
import uuidv4 from 'uuid/v4'

const id = uuidv4();

const initialState = {
    byId: {
        [id]: {
            id: id,
            title: 'default task',
            description: '',
            index: 1
        },
    },
    allIds: [id],
};


const boardsReducer = (state = initialState, action) => {
    console.log('Reducer state = ', state);

    switch (action.type) {
        case ADD_TASK:
            const {id, title, description} = action.payload;

            const allId = [...state.allIds];
            allId.push(id);

            const byId = {...state.byId};

            byId[id] = {
                id: id,
                title: title,
                description: description,
                index: allId.length
            };

            // const {id, title, columnId} = action.payload;
            //
            // const updatedTasks = [...state];
            //
            // updatedTasks.push({id, title, columnId, index: updatedTasks.length});

            // return updatedTasks;
            return {
                byId: {...byId},
                allIds: allId
            };
        default:
            return state;
    }
};


export default boardsReducer;