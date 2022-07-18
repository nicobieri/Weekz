import React from 'react';
import styled from 'styled-components';
import { Todo, ToggleTodo } from '../../interfaces/interTodo';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <Container>
      <StyledDiv>
        {todos.map((todo) => (
          <TodoListItem key={todo.todo_id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </StyledDiv>
    </Container>
  );
};

const Container = styled.div`
margin-left: auto;
margin-right: auto;
float: left;
`;

const StyledDiv = styled.div`
    
`;



