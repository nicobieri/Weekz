import { TodoItem } from '../components/ToDoItem/TodoItem';
import { Todo } from '../interfaces/Types';
import logo from '../assets/Logo_mitSlogan.png';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

const todos: Array<Todo> = [
  { text: 'hello i am a todo', complete: true },
  { text: 'todo2', complete: false },
];

export default function App() {
  return (
    <div className='App'>
      <img src={logo} className='App-logo' alt='logo' />
      <br />
      <br />
      <Link to={'/login'}>Login</Link>
      <div>
        <Link to={'/home'}>Home</Link>
      </div>
      <Outlet />
      <h2>Time now: {new Date().toISOString()}</h2>
    </div>
  );
}
