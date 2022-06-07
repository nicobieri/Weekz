import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from './views/LoginPage';
import HomePage from './views/HomePage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from './compositions/useUser';

const { isAuthenticated } = useUser();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='*' element={<Navigate to='/login' />} />
        <Route
          path='/login'
          element={isAuthenticated() ? <Navigate to='/home' /> : <LoginPage />}
        />
        <Route path='/home' element={isAuthenticated() ? <HomePage /> : <Navigate to='/login' />} />
      </Routes>
    </React.StrictMode>
    ,
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
