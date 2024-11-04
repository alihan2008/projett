import React from 'react';


const List = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <p>Email: {task.email}</p>
          <p>Date: {task.date}</p>
        </div>
      ))}
      <div>
      </div>
    </div>
  );
};

export default List;
