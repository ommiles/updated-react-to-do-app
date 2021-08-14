import React from 'react';

export const Todo = ({ todo }) => {
  return (
    <div className='Todo'>
      <li id={todo.id}>{todo.task}</li>
    </div>
  );
};
