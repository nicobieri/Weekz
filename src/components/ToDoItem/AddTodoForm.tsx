import React from 'react';
import styled from 'styled-components';
import { useForm } from '../../compositions/useForm';
import axios from 'axios';
import moment from 'moment';
import { AddTodo } from '../../interfaces/TodoTypes';

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
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
    addTodo(title, duedate, false);
    console.log('VALUES:');
    console.log(values);
    // send "values" to database
    axios.post('https://www.weekz.freecluster.eu/api/todo/save', values).then(function (response) {
      console.log('Response:');
      console.log(response.data);
    });
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <StyledInput
          type='text'
          name='todo_title'
          placeholder={'Task...'}
          onChange={onChangeTitle}
        />
        <input
          type='date'
          name='todo_duedate'
          defaultValue={currentDate}
          onChange={onChangeDate}
          required
        />
        <Styledbutton type='submit' value='Add ToDo'></Styledbutton>
      </form>
    </Container>
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
`;

const Styledbutton = styled.input`
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

const Container = styled.div`
  float: left;
  padding: 5% 30%;
  width: 40%;
  box-sizing: border-box;
  margin-right: 92%;
`;
