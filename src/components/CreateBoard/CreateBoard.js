import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {add_board} from "../../store/actions/boards";
import uuidv4 from 'uuid/v4'

const CreateBoard = () => {
    const [inputText, setInputText] = useState('');


    const dispatch = useDispatch();

    const inputChangeHandler = ({target}) => {
        setInputText(target.value)
    };

    const onKeyDownHandler = ({key}) => {
        if (key === 'Enter') {
            addBoardHandler(inputText);
            setInputText('')
        }
    };

    const addBoardHandler = () => {
        if (inputText.trim().length === 0) {
            return;
        }

        dispatch(add_board({
            id: uuidv4(),
            title: inputText
        }))
    };

    return (
        <div
            className="flex justify-center items-center w-64 h-32 py-12 mt-12 mr-12 border border-black rounded"
        >
            <input
                onChange={inputChangeHandler}
                onKeyDown={onKeyDownHandler}
                value={inputText}
                className="p-2 w-full bg-gray-100 border border-gray-500 rounded"
                type="text"
                maxLength={20}
                placeholder="Add new board"
            />
            <button
                onClick={addBoardHandler}
                className="p-2 bg-gray-900 text-white rounded"
            >
                add
            </button>
        </div>
    );
};

export default CreateBoard;