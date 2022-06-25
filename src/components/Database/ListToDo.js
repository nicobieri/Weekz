import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ListToDo() {
  const [todos, setToDos] = useState([]);
  useEffect(() => {
    getToDos();
  }, []);

  function getToDos() {
    axios.get('https://www.weekz.freecluster.eu/api/todos/').then(function (response) {
      console.log(response.data);
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
  return (
    <div>
      <h1>ToDo&#39;s</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Titel</th>
            <th>Notiz</th>
            <th>Datum</th>
            <th>Aktionen</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, key) => (
            <tr key={key}>
              <td>{todo.todo_id}</td>
              <td>{todo.todo_title}</td>
              <td>{todo.todo_note}</td>
              <td>{todo.todo_duedate}</td>
              <td>
                <Link to={`todo/${todo.todo_id}/edit`} style={{ marginRight: '10px' }}>
                  Bearbeiten
                </Link>
                <button onClick={() => deleteToDo(todo.todo_id)}>Löschen</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
