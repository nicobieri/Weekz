import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function ListToDo() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const { todo_id } = useParams();

  useEffect(() => {
    getToDo();
  }, []);

  function getToDo() {
    axios.get(`https://www.weekz.freecluster.eu/api/todo/${todo_id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`https://www.weekz.freecluster.eu/api/todo/${todo_id}/edit`, inputs).then(function (response) {
      console.log(response.data);
      navigate('/home');
    });
  };
  return (
    <div>
      <h1>ToDo bearbeiten</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing='10'>
          <tbody>
            <tr>
              <th>
                <label>Titel: </label>
              </th>
              <td>
                <input value={inputs.todo_title} type='text' name='todo_title' onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Notiz: </label>
              </th>
              <td>
                <input value={inputs.todo_note} type='text' name='todo_note' onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <th>
                <label>Datum: </label>
              </th>
              <td>
                <input value={inputs.todo_duedate} type='date' name='todo_duedate' onChange={handleChange} />
              </td>
            </tr>
            <tr>
              <td colSpan='2' align='right'>
                <button>Speichern</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
