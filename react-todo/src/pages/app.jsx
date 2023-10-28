import React from 'react';

import AddTask from '../organism/add-task';
import Header from "../molecules/header";
import Layout from '../templates/layout';
import TasksGroup from '../organism/tasks-group';


function App() {
  const [tasks, setTasks] = React.useState([]);

  const addTask = (taskName) => {
    const isValidTaskName = !tasks.includes(taskName.toLowerCase()) && taskName !== '';

    if (isValidTaskName) {
      setTasks([...tasks, taskName.toLowerCase()]);
    }
  };

  const deleteTaks = (taskToDelete) => {
    const filteredTaksList = tasks.filter((task) => task !== taskToDelete);

    setTasks(filteredTaksList);
  };

  return (
    <Layout>
      <Header />
      <AddTask onAddClick={addTask}/>
      <TasksGroup taskList={tasks} onDeleteTask={deleteTaks}/>
    </Layout>
  )
  };

export default App;