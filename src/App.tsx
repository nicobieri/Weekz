import React from 'react';
import {TodoItem} from "./TodoItem";
import {Todo} from "./Types";
import logo from './Logo_mitSlogan.png';
import './App.css'


const todos: Array<Todo> = [
    {text:"hello i am a todo", complete: true},
  {text:"todo2", complete: false}
];



export default function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <br/>
            <br/>
      <TodoItem todo={todos[0]} />
      <TodoItem todo={todos[1]} />
            <h2>Time now: {new Date().toISOString()}</h2>
      </div>
    );
};

