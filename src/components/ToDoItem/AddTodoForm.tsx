import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import { AddToDo } from '../../interfaces/interTodo';
import { useForm } from '../../compositions/useForm';

interface Props {
  addToDo: AddToDo;
}

export const AddTodoForm: React.FC<Props> = ({ addToDo }) => {
  // get current Date
  const currentDate = moment(new Date()).format('YYYY-MM-DD');

  // set default values for new Todos if they are not being defined
  const initialState = {
    todo_complete: false,
    todo_duedate: currentDate,
  };

  // define methodes/values for form
  const { onChangeTitle, onChangeDate, onSubmit, values, title, duedate } = useForm(
    submitTodo,
    initialState,
  );

  // when submitting form, this method is being executed
  async function submitTodo() {
    addToDo(title, duedate, false);
    console.log('VALUES:');
    console.log(values);
    // send "values" to database
    axios.post('https://www.weekz.freecluster.eu/api/todo/save', values).then(function (response) {
      console.log(response.data);
    });
  }

  return (
    <AddTodoFormContainer>
      <AddTodoform onSubmit={onSubmit}>
        <StyledInput
          type='text'
          name='todo_title'
          placeholder={'Task...'}
          onChange={onChangeTitle}
        />
        <StyledDate
          type='date'
          name='todo_duedate'
          defaultValue={currentDate}
          onChange={onChangeDate}
          required
        />
        <Styledbutton type='submit' value='Add ToDo'></Styledbutton>
      </AddTodoform>
    </AddTodoFormContainer>
  );
};

const StyledInput = styled.input`
  padding: 5px 5px;
  border-radius: 40px;
  border-color: #df9d76;
  font-size: 16px;
  background-color: transparent;
  font-family: inherit;
  box-sizing: border-box;
  width: 20%;
`;

const StyledDate = styled.input`
  padding: 5px 5px;
  border-radius: 40px;
  border-color: #df9d76;
  font-size: 16px;
  background-color: transparent;
  font-family: inherit;
  box-sizing: border-box;
  color: #df9d76;
  font-family: inherit;
width: 20%;
`;

const Styledbutton = styled.input`
  padding: 5px 5px;
  border-radius: 40px;
  border-color: #df9d76;
  font-size: 16px;
  background-color: transparent;
  font-family: inherit;
  box-sizing: border-box;
  color: #df9d76;
  font-family: inherit;
  width: 20%;
`;

const AddTodoFormContainer = styled.div`
background-color: transparent;

`;
const AddTodoform = styled.form`
display: flex;
flex-direction: row;
justify-content: center;
margin: 1%;
`;
