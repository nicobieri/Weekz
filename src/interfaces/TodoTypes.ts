interface Todo {
  todo_title: string;
  todo_duedate: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (todo_title: string, todo_duedate: string) => void;

export type { Todo, ToggleTodo, AddTodo };
