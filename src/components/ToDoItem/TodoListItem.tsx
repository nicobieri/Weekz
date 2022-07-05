import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Todo, ToggleTodo } from '../../interfaces/interTodo';
import { useTodo } from '../../compositions/useTodo';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  const { submitTodo } = useTodo();

  return (
    <Container>
      <StyledLabel style={{ textDecoration: todo.todo_complete ? 'line-through' : undefined }}>
        <StyledInput
          type='checkbox'
          name='todo_complete'
          checked={todo.todo_complete}
          onChange={() => {
            toggleTodo(todo);
            submitTodo(todo);
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
