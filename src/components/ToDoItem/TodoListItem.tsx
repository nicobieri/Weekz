import React from 'react';
import { Todo, ToggleTodo } from '../../interfaces/TodoTypes';
import styled from 'styled-components';
import moment from 'moment';
import {useForm} from '../../compositions/useForm';
import axios from 'axios';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}


export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {




    // set default values for new Todos if they are not being defined
    const initialState = {};

    // define methodes/values for form
    const { values } = useForm(
        submitTodo,
        initialState,
    );

    // when submitting form, this method is being executed
    async function submitTodo() {
        //onChangeComplete();
        toggleTodo(todo);
        //addTodo(title, duedate, true);
        console.log('VALUES:');
        console.log(values);
        // send "values" to database
        axios.post('https://www.weekz.freecluster.eu/api/todo/save', todo).then(function (response) {
            console.log('Response:');
            console.log(response.data);
        });
    }

  return (
    <Container>
      <StyledLabel style={{ textDecoration: todo.todo_complete ? 'line-through' : undefined }}>
        <StyledInput
          type='checkbox'
          name='todo_complete'
          checked={todo.todo_complete}
          onChange={submitTodo}
    //      onChange={() => {
   //           toggleTodo(todo);
  //        }}
        />{' '}
        {todo.todo_title} {'('}
        {moment(todo.todo_duedate).format('DD.MM.YYYY')}
        {')'}
      </StyledLabel>
    </Container>
  );
};

const Container = styled.div``;

const StyledLabel = styled.label``;

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-family: inherit;
`;
