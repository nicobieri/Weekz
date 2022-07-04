interface Todo {
  todo_id?: number;
  todo_title: string;
  todo_duedate: string;
  todo_complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (todo_title: string, todo_duedate: string, todo_complete: boolean) => void;

export type { Todo, ToggleTodo, AddTodo };
