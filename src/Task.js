import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Task = ({ task, toggleComplete, updateTask, deleteTask }) => {
  const inputRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(task.task);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleChange = e => {
    setCurrentTask(e.target.value);
  };

  const toggleForm = () => {
    setIsEditing(!isEditing);
  };

  const toggleCompleted = e => {
    toggleComplete(e.target.id);
  };

  const handleUpdate = e => {
    e.preventDefault();
    updateTask(task.id, currentTask);
    toggleForm();
  };

  const handleDelete = e => {
    deleteTask(e.target.id);
  };

  let result;

  if (isEditing) {
    result = (
      <div className='task'>
        <form id='Task-edit-form' onSubmit={handleUpdate}>
          <input
            onChange={handleChange}
            value={currentTask}
            type='text'
            ref={inputRef}
          />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className='task'>
        <li
          id={task.id}
          onClick={toggleCompleted}
          className={task.completed ? 'todo-task completed' : 'todo-task'}
        >
          {task.task}
        </li>
        <div id='Task-buttons' className={task.completed ? 'completed' : null}>
          <button onClick={toggleForm}>
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
