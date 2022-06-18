import React, { useState } from 'react';
import {AddTodo} from '../../interfaces/types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';



interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('');
    const [startDate, setSelectedDate] = useState(new Date());



    return (
        <Container>
            <Styledinput
                type="text"
                placeholder={'Task...'}
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <Styleddiv>
                <DatePicker selected={startDate} onChange={(date: Date) => setSelectedDate(date)}/>
            </Styleddiv>



            <Styledbutton
                type="submit"
                value="Add Todo"
                onClick={(e) => {
                    e.preventDefault();
                    addTodo(text, startDate.toDateString());
                    setText('');
                    setSelectedDate(startDate);
                }}
            >
            </Styledbutton>

        </Container>
    );
};

const Styledinput = styled.input`
    float: left;
    padding: 5px 5px;
    border-radius: 40px;
    border-color: #df9d76;
    font-size: 16px;
    background-color: transparent;
    font-family: inherit;
    box-sizing: border-box;
`;

const Styledbutton = styled.input`
float: left;
margin: 25px 0px;
    padding: 5px 5px;
    border-radius: 40px;
    border-color: #df9d76;
    box-shadow: var(--ntp-realbox-shadow);
    font-size: 16px;
    height: var(--ntp-realbox-height);
    background-color: transparent;
    font-color: white;
    color: #df9d76;
    width: 180px; 
   font-size: 1.1em; 
   font-family: inherit;
   font-weight: 300;
   box-sizing: border-box;
`;

const Styleddiv = styled.div`
    float: left;
`;

const Container = styled.div`
float: left;
    padding: 5% 30%;
    width: 40%;
    box-sizing: border-box;
    margin-right: 92%;
`;
