import { Routes, Route, Link } from 'react-router-dom';
import CreateToDo from './CreateToDo';
import EditToDo from './EditToDo';
import ListToDo from './ListToDo';

function DBTest() {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <Link to=''>ToDo&#39;s</Link>
          </li>
          <li>
            <Link to='todo/create'>ToDo erfassen</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<ListToDo />} />
        <Route path='todo/create' element={<CreateToDo />} />
        <Route path='todo/:todo_id/edit' element={<EditToDo />} />
      </Routes>
    </div>
  );
}

export default DBTest;
