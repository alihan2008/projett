import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/list'; // Добавим новый компонент для отображения списка

const App = () => {
  const [tasks, setTasks] = useState([]); 

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div>
      <Form save={addTask} />
      <List tasks={tasks} /> {/* Отобразим список задач */}
    </div>
  );
};

export default App;
