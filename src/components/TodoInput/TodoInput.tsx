import React, {useState, ChangeEvent} from 'react';
import { ITask } from '../../interfaces/Tasks';
import TodoTask from '../ToDoItem/TodoTask';
import {Todo} from '../../interfaces/Types';

interface TodoInputProps {
    todoList: Todo;
}

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
            })
        );
    };

    return (
        <div className="App">
            <div className="header">
                <div className="inputContainer">
                    <input
                        type="text"
                        placeholder="Task..."
                        name="task"
                        value={task}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        placeholder="Deadline (in Days)..."
                        name="deadline"
                        value={deadline}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="todoList">
                {todoList.map((task: ITask, key: number) => {
                    return <TodoTask key={key} task={task} completeTask={completeTask} />;
                })}
            </div>
        </div>
    );
};

