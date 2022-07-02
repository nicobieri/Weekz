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
      console.log(response.data);
      setToDos(response.data);
    });
  }

  const deleteToDo = (todo_id) => {
    axios
      .delete(`https://www.weekz.freecluster.eu/api/todo/${todo_id}/delete`)
      .then(function (response) {
        console.log(response.data);
        getToDos();
      });
  };

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setToDos(newTodos);
    console.log(newTodos);
  };

  const addTodo: (todo_title: string, due_date: string) => void = (
    todo_title: string,
    due_date: string,
  ) => {
    const newTodo = { todo_title, due_date, complete: false };
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
