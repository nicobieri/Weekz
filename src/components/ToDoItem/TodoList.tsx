import React from 'react';
import { TodoListItem } from './TodoListItem';
import { Todo, ToggleTodo } from '../../interfaces/TodoTypes';
import styled from 'styled-components';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <Container>
      <StyledDiv>
        {todos.map((todo, key) => (
          <TodoListItem key={todo.todo_id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </StyledDiv>
    </Container>
  );
};

const Container = styled.div`
  float: left;
  padding: 30%;
  width: 25px;
  margin: 30% 40%;
`;

const StyledDiv = styled.div`
  float: left;
  padding: 100%;
  width: 20px;
  box-sizing: border-box;
  margin: 0% 1000%;
  width: 4000%;
  height: 18rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  background: inherit;
  overflow: hidden;
  vertical-align: text-bottom;
  text-align: center;
  background-color: transparent;
  font-family: Inter, sans-serif;
  color: hsla(0, 0%, 100%, 0.71);
  font-size: 20px;
  line-height: 2px;
  font-weight: 100;
  overflow-x: hidden; /* Hide horizontal scrollbar */
  overflow-y: auto; /* Add vertical scrollbar */
  font-family: inherit;
`;
