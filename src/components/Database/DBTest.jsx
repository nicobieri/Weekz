import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import ListUser from './ListUser';

function DBTest() {
  return (
    <div className='App'>
      <h5>React CRUD operations using PHP API and MySQL</h5>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/'>List Users</Link>
            </li>
            <li>
              <Link to='user/create'>Create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path='user/create' element={<CreateUser />} />
          <Route path='user/:id/edit' element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default DBTest;
