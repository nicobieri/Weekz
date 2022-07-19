import axios from 'axios';
import { useState } from 'react';
import {DeleteToDo, Todo, TodoComposition, ToggleTodo} from '../interfaces/interTodo';

export function useTodo(): TodoComposition {
  const Todos: Todo[] = [];
  const [todos, setToDos] = useState(Todos);

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

  const addToDo: (todo_title: string, todo_duedate: string, todo_complete: boolean) => void = (
    todo_title: string,
    todo_duedate: string,
    todo_complete: boolean,
  ) => {
    const newTodo = { todo_title, todo_duedate, todo_complete };
    setToDos([...todos, newTodo]);
  };

  const deleteToDo: DeleteToDo = (selectedTodo: Todo) => {
    axios
      .delete(`https://www.weekz.freecluster.eu/api/todo/${selectedTodo}/delete`)
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

  // when submitting form, this method is being executed
  async function submitTodo(todo: Todo) {
    axios
      .put(`https://www.weekz.freecluster.eu/api/todo/${todo.todo_id}/edit`, todo)
      .then(function (response) {
        console.log(response.data);
      });
  }

  return {
    getToDos,
    addToDo,
    setToDos,
    deleteToDo,
    toggleTodo,
    submitTodo,
    todos,
  };
}
