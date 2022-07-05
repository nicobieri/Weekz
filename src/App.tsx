import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import HomePage from './views/HomePage';

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<LoginPage setIsAuth={setIsAuth} />} />
          <Route path='/home/*' element={isAuth ? <HomePage /> : <Navigate to='/login' />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
};

export default App;