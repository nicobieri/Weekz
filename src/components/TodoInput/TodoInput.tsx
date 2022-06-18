import React, { useState } from 'react';
import { TodoList } from '../ToDoItem/TodoList';
import { AddTodoForm } from '../ToDoItem/AddTodoForm';
import {AddTodo, Todo, ToggleTodo} from '../../interfaces/types';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
    date: '',
  },
  {
    text: 'Write app',
    complete: true,
    date: '',
  },
];

export function TodoInput() {
  const [todos, setTodos] = useState(initialTodos);

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
    setTodos(newTodos);
    console.log(newTodos)
  };

  const addTodo: (text: string, date: string) => void = (text: string, date: string) => {
    const newTodo = { text, date, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
      <>
        <AddTodoForm addTodo={addTodo}/>
        <TodoList todos={todos} toggleTodo={toggleTodo} />

      </>
  );
}

