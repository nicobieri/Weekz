import React, { useEffect, useState } from 'react';
import { Todo, ToggleTodo } from '../../interfaces/TodoTypes';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';
import EditToDo from '../Database/EditToDo';
import { Link, Route, Routes } from 'react-router-dom';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  const [todos, setToDos] = useState([]);
  useEffect(() => {
    getToDos();
  }, []);

  function getToDos() {
    axios.get('https://www.weekz.freecluster.eu/api/todos/').then(function (response) {
      setToDos(response.data);
    });
  }

  const deleteToDo = (todo_id) => {
    axios
      .delete(`https://www.weekz.freecluster.eu/api/todo/${todo_id}/delete`)
      .then(function (response) {
        console.log(response.data);
        getToDos();
      });
  };

  // when submitting form, this method is being executed
  async function submitTodo() {
    axios
      .put(`https://www.weekz.freecluster.eu/api/todo/${todo.todo_id}/edit`, todo)
      .then(function (response) {
        console.log(response.data);
      });
  }

  return (
    <Container>
      <StyledLabel style={{ textDecoration: todo.todo_complete ? 'line-through' : undefined }}>
        <StyledInput
          type='checkbox'
          name='todo_complete'
          checked={todo.todo_complete}
          onChange={() => {
            toggleTodo(todo);
            submitTodo();
          }}
        />{' '}
        {todo.todo_title} {'('}
        {moment(todo.todo_duedate).format('DD.MM.YYYY')}
        {')  '}
      </StyledLabel>
      <Link to={`todo/${todo.todo_id}/edit`} style={{ marginRight: '10px' }}>
        Edit
      </Link>
      <button onClick={() => deleteToDo(todo.todo_id)}>Delete</button>
    </Container>
  );
};

const Container = styled.div``;

const StyledLabel = styled.label``;

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-family: inherit;
`;
