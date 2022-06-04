import React from 'react';
import { TodoItemProps } from '../../interfaces/ToDo';
import './TodoItem.css';

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li>
      <label className={todo.complete ? 'complete' : undefined}>
        <input type={'checkbox'} checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  );
};
