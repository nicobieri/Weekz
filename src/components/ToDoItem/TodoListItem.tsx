import React from 'react';
import { Todo, ToggleTodo } from '../../interfaces/TodoTypes';
import styled from 'styled-components';
import moment from 'moment';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <Container>
      <StyledLabel style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
        <StyledInput
          type='checkbox'
          name='todo_complete'
          checked={todo.complete}
          onChange={() => {
            toggleTodo(todo);
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
