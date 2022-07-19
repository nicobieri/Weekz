import React from 'react';
import styled from 'styled-components';
import { Todo, ToggleTodo } from '../../interfaces/interTodo';
import { TodoListItem } from './TodoListItem';


interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo}) => {
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

`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap | wrap | wrap-reverse;
    justify-content: space-around;
    margin: 1%;
    padding: 1%;
`;




