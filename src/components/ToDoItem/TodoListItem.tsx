import React from 'react';
import {Todo, ToggleTodo} from '../../interfaces/types';

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    return (
        <li>
            <label
                style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
>
    <input
        type="checkbox"
    checked={todo.complete}
    onChange={() => {
        toggleTodo(todo);
    }}
    />{' '}
                {todo.text} {todo.date}
    </label>
    </li>
);
};
