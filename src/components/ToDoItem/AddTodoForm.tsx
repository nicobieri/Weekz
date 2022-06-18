import React, { useState } from 'react';
import {AddTodo} from '../../interfaces/types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('');
    const [startDate, setSelectedDate] = useState(new Date());



    return (
        <form>
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <DatePicker selected={startDate} onChange={(date: Date) => setSelectedDate(date)}/>
            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    addTodo(text, startDate.toDateString());
                    setText('');
                    setSelectedDate(startDate);
                }}
            >
                Add Todo
            </button>

        </form>
    );
};
