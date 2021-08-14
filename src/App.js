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
    { id: uuidv4(), task: 'Pick up dry cleaning', completed: false },
    { id: uuidv4(), task: 'Hike Mt. Kilimanjaro', completed: true },
    { id: uuidv4(), task: 'Dog groomer', completed: false },
    { id: uuidv4(), task: 'Get an undercut', completed: true },
    { id: uuidv4(), task: 'Visit dentist', completed: false },
    { id: uuidv4(), task: 'Get orchids at florist', completed: true },
    { id: uuidv4(), task: 'Piano lesson', completed: false },
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
        <header className='header Sohne-Breit' style={{ position: 'sticky' }}>
          <h1 className='Test-Pitch-Regular' style={{}}>
            To-do List <span>A simple React Todo List App</span>
          </h1>
        </header>
        <div className='App Sohne-Breit' style={{ position: 'static' }}>
          <ul>{readTasks}</ul>
          <footer style={{ position: 'sticky' }}>
            <TaskForm createTask={createTask} />
          </footer>
        </div>
      </main>
    </div>
  );
};
