import { Routes, Route } from 'react-router-dom';
import EditToDo from './EditToDo';
import ListToDo from './ListToDo';

function DBTest() {
  return (
    <div className='App'>
      <Routes>
        <Route path='todo/:todo_id/edit' element={<EditToDo />} />
      </Routes>
    </div>
  );
}

export default DBTest;
