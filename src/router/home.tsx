import { TodoItem } from '../components/ToDoItem/TodoItem';
import { Todo } from '../interfaces/Types';
import { TodoInput } from '../components/TodoInput/TodoInput';

const todos: Array<Todo> = [
  { text: 'hello i am a todo', complete: true },
  { text: 'todo2', complete: false },
];

export default function Home() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Home</h2>
      <TodoInput />
      <TodoItem todo={todos[0]} />
      <TodoItem todo={todos[1]} />
    </main>
  );
}
