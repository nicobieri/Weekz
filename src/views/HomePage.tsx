import { TodoInput } from '../components/TodoInput/TodoInput';
import { useUser } from '../compositions/useUser';

// const todos: Array<Todo> = [
//   { text: 'hello i am a todo', complete: true },
//   { text: 'todo2', complete: false },
// ];

const HomePage = () => {
  const { getUserName, getUserImage } = useUser();
  return (
    <div className='HomePage'>
      <h2>Home</h2>
      <div>Hallo {getUserName()}</div>
      <img src={getUserImage()}></img>
      <TodoInput />
    </div>
  );
};
export default HomePage;
