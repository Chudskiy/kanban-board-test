import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import uuidv4 from 'uuid/v4'
import {add_column} from "../../store/actions/columns";
import {add_column_to_board} from "../../store/actions/boards";

const CreateColumn = (props) => {
    const [inputText, setInputText] = useState('');

    // const boardId = useSelector(({boards}) => boards.byId[props.boardId].id);


    const dispatch = useDispatch();

    const inputChangeHandler = ({target}) => {
        setInputText(target.value)
    };

    const onKeyDownHandler = ({key}) => {
        if (key === 'Enter') {
            addColumnHandler(inputText);
            setInputText('')
        }
    };

    const addColumnHandler = () => {
        if (inputText.trim().length === 0) {
            return;
        }
        setInputText('');

        const columnId = uuidv4();
        dispatch(add_column({
            id: columnId,
            title: inputText,
            boardId: props.boardId
        }));

        dispatch(add_column_to_board({
            boardId: props.boardId,
            columnId
        }))
    };

    return (
        <div
            className="flex justify-between items-center p-3 lg:w-64 bg-gray-200 border border-gray-500"
            style={{minWidth: '250px'}}
        >
            <input
                onChange={inputChangeHandler}
                onKeyDown={onKeyDownHandler}
                value={inputText}
                className="p-2 w-full bg-gray-100 border border-gray-500 rounded"
                type="text"
                maxLength={20}
                placeholder="Add new column"
            />

            <button
                onClick={addColumnHandler}
                className="p-2 bg-gray-300 hover:bg-gray-500 rounded">
                Add
            </button>
        </div>
    );
};

export default CreateColumn;