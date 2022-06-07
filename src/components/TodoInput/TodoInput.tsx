import React, { useState, ChangeEvent } from 'react';
import { ITask } from '../../interfaces/ToDo';
import TodoTask from '../ToDoItem/TodoTask';
import styled from 'styled-components';

export const TodoInput: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDealine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDealine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDealine(0);
    console.log(newTask);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      }),
    );
  };

  return (
    <div className='App'>
      <div className='header'>
        <div className='inputContainer'>
          <input
            type='text'
            placeholder='Task...'
            name='task'
            value={task}
            onChange={handleChange}
          />
          <input
            type='number'
            placeholder='Deadline (in Days)...'
            name='deadline'
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <Button onClick={addTask}>Add Task</Button>
      </div>
      <div className='todoList'>
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
