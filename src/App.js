import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './Task';
import { TodoForm } from './TodoForm';
import './App.css';

export const App = () => {
  const [taskList, setTaskList] = useState([
    { id: uuidv4(), task: 'Task 1', completed: false },
    { id: uuidv4(), task: 'Task 2', completed: true },
  ]);

  const createTask = newTask => {
    setTaskList([...taskList, newTask]);
  };

  const updateTask = () => {
    console.log('update');
  };

  const deleteTask = id => {
    setTaskList(taskList.filter(task => task.id !== id));
  };

  const readTasks = taskList.map(task => (
    <Task key={task.id} task={task} deleteTask={deleteTask} />
  ));

  return (
    <div className='App'>
      <h1>
        To-do List <span>A simple React Todo List App</span>
      </h1>
      <ul>{readTasks}</ul>
      <TodoForm createTask={createTask} />
    </div>
  );
};
