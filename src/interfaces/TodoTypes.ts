interface Todo {
  todo_title: string;
  due_date: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (todo_title: string, date: string) => void;

export type { Todo, ToggleTodo, AddTodo };
