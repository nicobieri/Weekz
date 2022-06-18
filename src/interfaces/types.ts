

interface Todo {
    text: string;
    complete: boolean;
    date: string;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string, date: string) => void;

export type { Todo, ToggleTodo, AddTodo };
