interface Todo {
  text: string;
  complete: boolean;
}

interface TodoInputProps {
  todoList: Todo;
}

interface TodoItemProps {
  todo: Todo;
}

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

interface ITask {
  taskName: string;
  deadline: number;
}

export type { Todo, TodoInputProps, TodoItemProps, ITask, Props };
