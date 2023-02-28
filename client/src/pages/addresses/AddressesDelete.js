import React from 'react'
import './AddressesDelete.css'
import{ useState} from "react";
import  axios from 'axios';

const AddressesDelete = () => {
    const [data, setData] = useState({
        id:''
      })
    const url = 'http://localhost:8081/v1/addresses/'+ data.id
    
  
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
    <div>
        <h2 className='section_title'>Delete Addreses by ID</h2>
        <form onSubmit={(e)=>submit(e)} id='myForm' className='address_form'>
            <p className='section_title'> Enter Id</p>
          <input onChange={(e)=>handle(e)} id="id" value ={data.type} placeholder="ex. 22"type="text" ></input>
          <button >Submit</button>
        </form>
    </div>
  )
}

export default AddressesDelete