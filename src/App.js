import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './Task';
import { TaskForm } from './TaskForm';
import './css/App.css';
import './css/Fonts.css';
import './css/Task.css';
import './css/TaskForm.css';

export const App = () => {
  const [taskList, setTaskList] = useState([
    { id: uuidv4(), task: 'Task 1', completed: false },
    { id: uuidv4(), task: 'Task 2', completed: true },
    { id: uuidv4(), task: 'Task 3', completed: false },
    { id: uuidv4(), task: 'Task 4', completed: true },
    { id: uuidv4(), task: 'Task 5', completed: false },
    { id: uuidv4(), task: 'Task 6', completed: true },
    { id: uuidv4(), task: 'Task 7', completed: false },
    { id: uuidv4(), task: 'Task 8', completed: true },
  ]);

  const toggleComplete = id => {
    const updatedTasks = taskList.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTasks);
  };

  const createTask = newTask => {
    setTaskList([...taskList, newTask]);
  };

  const updateTask = (id, updatedTask) => {
    const updatedTaskList = taskList.map(task => {
      if (task.id === id) {
        return { ...task, task: updatedTask };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  const deleteTask = id => {
    setTaskList(taskList.filter(task => task.id !== id));
  };

  const readTasks = taskList.map(task => (
    <Task
      key={task.id}
      task={task}
      toggleComplete={toggleComplete}
      updateTask={updateTask}
      deleteTask={deleteTask}
    />
  ));

  return (
    <div>
      <main>
        <div
          className='header Sohne-Breit'
          style={{ position: 'sticky', top: 0 }}
        >
          <h1 className=''>
            To-do List <span>A simple React Todo List App</span>
          </h1>
        </div>
        <div className='App Sohne-Breit' style={{ position: 'static' }}>
          <ul>{readTasks}</ul>
          <TaskForm createTask={createTask} />
        </div>
        {/* <div style={{ position: 'sticky', bottom: 100 }}>
          <TaskForm createTask={createTask} />
        </div> */}
      </main>
    </div>
  );
};
