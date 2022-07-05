import { useEffect } from 'react';
import styled from 'styled-components';
import { useTodo } from '../../compositions/useTodo';
import { AddTodoForm } from '../ToDoItem/AddTodoForm';
import { TodoList } from '../ToDoItem/TodoList';
import DBTest from '../Database/DBTest';

export function Planer() {
  const { getToDos, addToDo, toggleTodo, todos } = useTodo();

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <>
      <AddTodoForm addToDo={addToDo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <StyledContainer>
        <DBTest />
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  position: absolute;
  top: 650px;
`;
