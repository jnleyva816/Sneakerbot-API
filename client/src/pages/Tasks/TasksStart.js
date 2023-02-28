import React from 'react'
import './TasksStart.css'
import  axios from 'axios';
import{ useState} from "react";

const TasksStart = () => {

    const [data, setData] = useState({
        id:''
      })
  const url = 'http://localhost:8081/v1/tasks/'+ data.id + '/start'

  function submit(e){
    // e.preventDefault();
    axios.delete(url,{
      id: data.id
    }).then(res=>{
      console.log(res.data);
    })
  }

  function handle(e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  } 
  return (
    <div className='task_delete'>
        <h2 className='section_title'>Start Task by ID</h2>
        <form onSubmit={(e)=>submit(e)} id='myForm' className='address_form'>
            <p className='section_title'> Enter Id</p>
          <input onChange={(e)=>handle(e)} id="id" value ={data.type} placeholder="ex. 22"type="text" ></input>
          <button >Submit</button>
        </form>
    </div>
  )
}

export default TasksStart