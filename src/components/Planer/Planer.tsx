import { useEffect, useState } from 'react';
import { TodoList } from '../ToDoItem/TodoList';
import { Todo, ToggleTodo } from '../../interfaces/TodoTypes';
import DBTest from '../Database/DBTest';
import styled from 'styled-components';
import { AddTodoForm } from '../ToDoItem/AddTodoForm';
import axios from 'axios';

export function Planer() {
  const Todos: Todo[] = [];

  const [todos, setToDos] = useState(Todos);
  useEffect(() => {
    getToDos();
  }, []);

  function getToDos() {
    axios.get('https://www.weekz.freecluster.eu/api/todos/').then(function (response) {
      // Translation MySQL <-> Javascript: Modify dataset complete = '0' to complete = 'false' (or '1' to 'true')
      const translateCompleteStatus = response.data.map((todo) => {
        if (todo.todo_complete == '0') {
          todo.todo_complete = false;
        } else {
          todo.todo_complete = true;
        }
        return todo;
      });
      setToDos(translateCompleteStatus);
    });
  }

  const deleteToDo = (todo_id) => {
    axios
      .delete(`https://www.weekz.freecluster.eu/api/todo/${todo_id}/delete`)
      .then(function (response) {
        getToDos();
        console.log(response.data);
      });
  };

  // Toggle the Todo to checked or unchecked
  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const changeCompleteStatus = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          todo_complete: !todo.todo_complete,
        };
      }
      return todo;
    });
    setToDos(changeCompleteStatus);
  };

  const addTodo: (todo_title: string, todo_duedate: string, todo_complete: boolean) => void = (
    todo_title: string,
    todo_duedate: string,
    todo_complete: boolean,
  ) => {
    const newTodo = { todo_title, todo_duedate, todo_complete };
    setToDos([...todos, newTodo]);
  };

  return (
    <>
      <AddTodoForm addTodo={addTodo} />
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
