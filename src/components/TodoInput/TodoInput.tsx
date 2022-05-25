import React, {useState, ChangeEvent} from 'react';
import { ITask } from '../../interfaces/Tasks';

class TodoInputProps {
}

export const TodoInput: React.FC<TodoInputProps> = () => {
    const [task, setTask] = useState<string>('');
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === 'todo') {
            setTask(event.target.value);
    } else {
    setDeadline(Number(event.target.value));
    }
    };

    const addTask = (): void => {
        const newTask = {taskName:task, deadline: deadline}
        setTodoList([...todoList, newTask]);
        console.log(todoList)
    }

    return (
    <div>
        <div className={'header'}>
      <input type='text' placeholder='New Task' name={task} onChange={handleChange}/>
      <input type='number' placeholder='deadline' onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
    </div>
    </div>
  );
};
