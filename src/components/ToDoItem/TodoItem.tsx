import React from 'react';
import { Todo } from '../../interfaces/Types';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
}

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
