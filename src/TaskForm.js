import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskForm = ({ createTask }) => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: '',
    }
  );

  const handleChange = e => {
    setUserInput({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = { id: uuidv4(), task: userInput.task, completed: false };
    createTask(newTask);
    setUserInput({ task: '' });
  };

  return (
    <form className='new-task-form' onSubmit={handleSubmit}>
      <label htmlFor='task'>New task</label>
      <input
        value={userInput.task}
        onChange={handleChange}
        id='task'
        type='text'
        name='task'
        placeholder='New To-do'
      />
      <button>Add Todo</button>
    </form>
  );
};
