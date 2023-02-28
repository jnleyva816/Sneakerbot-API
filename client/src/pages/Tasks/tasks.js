import React from 'react';
import Navbar from '../../Navbar'
import './tasks.css'
import TasksForm from './TasksForm';
import TasksTable from './TasksTable';
import TasksDelete from './TasksDelete';
import TasksStart from './TasksStart';
import TasksStop from './TasksStop';
  
const Tasks = () => {
  return (
    <div className='tasks'>
      <Navbar/>
      <h1 className='title'>Tasks</h1>
      <TasksTable/>
      <TasksForm/>
      <TasksDelete/>
      <TasksStart />
      <TasksStop />

    </div>
  );
};
  
export default Tasks;