import React from 'react';
import {TodoItem} from "./TodoItem";
import {Todo} from "./Types";


const todos: Array<Todo> = [
    {text:"hello i am a todo", complete: true},
  {text:"todo2", complete: false}
];

const App: React.FC = () => {
  return <React.Fragment>
      <TodoItem todo={todos[0]} />
      </React.Fragment>
};

export default App;
