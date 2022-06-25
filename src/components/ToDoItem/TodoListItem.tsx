import React from 'react';
import { Todo, ToggleTodo } from '../../interfaces/TodoTypes';
import styled from 'styled-components';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <Container>
      <Styledli>
        <Styledlabel style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
          <Styledinput
            type='checkbox'
            checked={todo.complete}
            onChange={() => {
              toggleTodo(todo);
            }}
          />{' '}
          {todo.text} {todo.date}
        </Styledlabel>
      </Styledli>
    </Container>
  );
};

const Container = styled.div``;

const Styledli = styled.li``;

const Styledlabel = styled.label``;

const Styledinput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-family: inherit;
`;
