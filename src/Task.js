import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Task = ({ task, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tasks, setTasks] = useState(task.task);

  const handleChange = () => {
    console.log('change');
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const toggleComplete = () => {
    console.log('toggleComplete');
  };

  const handleUpdate = e => {
    e.preventDefault();
    console.log('update');
  };

  const handleDelete = e => {
    deleteTask(e.target.id);
  };

  let result;
  if (isEditing) {
    result = (
      <div className='Todo'>
        <form className='Todo-edit-form' onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task.task} type='text' />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className='Todo'>
        <li
          id={task.id}
          onClick={toggleComplete}
          className={task.completed ? 'Todo-task completed' : 'Todo-task'}
        >
          {task.task}
        </li>
        <div id='Todo-buttons'>
          <button onClick={toggleEdit}>
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button id={task.id} onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
    );
  }

  return result;
};
