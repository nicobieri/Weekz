import { useEffect } from 'react';
import styled from 'styled-components';
import { useTodo } from '../../compositions/useTodo';
import { AddTodoForm } from '../ToDoItem/AddTodoForm';
import { TodoList } from '../ToDoItem/TodoList';
import DBTest from '../Database/DBTest';

export function Planer() {
  const { getToDos, addToDo, toggleTodo, deleteToDo, todos } = useTodo();

  useEffect(() => {
    getToDos();
  }, []);


    return (
      <div>
        <AddAndListContainer>
      <AddTodoForm addToDo={addToDo} />
            <CardContainer>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteToDo={deleteToDo} />
            </CardContainer>
            </AddAndListContainer>
          <StyledContainer>
              <DBTest />
          </StyledContainer>
</div>

  );
}


const AddAndListContainer = styled.div`


`;
const CardContainer = styled.div`
`;

const StyledContainer = styled.div`

`;
