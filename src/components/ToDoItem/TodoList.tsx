import React from 'react';
import styled from 'styled-components';
import {DeleteToDo, Todo, ToggleTodo} from '../../interfaces/interTodo';
import { TodoListItem } from './TodoListItem';


interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  deleteToDo: DeleteToDo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteToDo}) => {
  return (
    <Container>
      <StyledDiv>
        {todos.map((todo) => (
          <TodoListItem key={todo.todo_id} todo={todo} toggleTodo={toggleTodo} deleteToDo={deleteToDo} />
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




