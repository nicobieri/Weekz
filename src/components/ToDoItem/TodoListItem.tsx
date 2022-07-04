import React, {useEffect} from 'react';
import { Todo, ToggleTodo } from '../../interfaces/TodoTypes';
import styled from 'styled-components';
import moment from 'moment';
import {useForm} from '../../compositions/useForm';
import axios from 'axios';
import {useParams} from 'react-router-dom';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    // when submitting form, this method is being executed
    async function submitTodo() {
        axios
            .put(`https://www.weekz.freecluster.eu/api/todo/${todo.todo_id}/edit`, todo)
            .then(function (response) {
                console.log(response.data);
            });
    };

  return (
    <Container>
      <StyledLabel style={{ textDecoration: todo.todo_complete ? 'line-through' : undefined }}>
        <StyledInput
          type='checkbox'
          name='todo_complete'
          checked={todo.todo_complete}
          onChange={() => {
              toggleTodo(todo);
              submitTodo();
          }}
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
