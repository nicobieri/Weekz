import { Dispatch, SetStateAction } from 'react';

interface Todo {
  todo_id?: number;
  todo_title: string;
  todo_duedate: string;
  todo_complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type DeleteToDo = (selectedTodo: Todo) => void;

type AddToDo = (todo_title: string, todo_duedate: string, todo_complete: boolean) => void;

declare interface TodoComposition {
  getToDos(): void;
  addToDo: AddToDo;
  setToDos: Dispatch<SetStateAction<Todo[]>>;
  deleteToDo: DeleteToDo;
  toggleTodo: ToggleTodo;
  submitTodo(selectedTodo: Todo): Promise<void>;
  todos: Todo[];
}

export type { Todo, ToggleTodo, AddToDo, TodoComposition , DeleteToDo};
