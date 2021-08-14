import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';
import './App.css';

export const App = () => {

  const [tasks, setTasks] = useState([
    { id: uuidv4(), task: 'task 1', completed: false },
    { id: uuidv4(), task: 'task 2', completed: true },
  ]);

  const createTask = newTask => {
    setTasks([...tasks, newTask]);
  }

  const todoList = tasks.map(todo => <Todo key={todo.id} todo={todo} />);

  return (
    <div className='App'>
      <h1>
        To-do List <span>A simple React Todo List App</span>
      </h1>
      <ul>{todoList}</ul>
      <TodoForm createTask={createTask} />
    </div>
  );
};
