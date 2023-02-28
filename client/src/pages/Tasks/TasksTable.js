import React from 'react'
import './TasksTable.css'
import { useState, useEffect } from "react";

const TasksTable = () => {

    const [list, setList] = useState([])
  
    useEffect(()=>{
      fetchData()
    },[])
  
    async function fetchData(){
      fetch('http://localhost:8081/v1/tasks')
      .then((response) => response.json())
      .then((json) => {
          setList(json.data)
      });
    }
  return (
    <div>
        <section className='current_address_section'>
        <h2 className='section_title'>
          Current Tasks Available
        </h2>
        <section className='address_list'>
        <table className='styled-table'>
          <tr>
            <th>ID</th>
            <th>Site</th>
            <th>Product Code</th>
            <th>Style index</th>
            <th>Size</th>
            <th>Billing ID</th>
            <th>Shipping ID</th>
            <th>Email</th>


          </tr>
          <tbody>
          {
            list.map(item => (
            <tr key={item.id} className="active-row">
                <td>{item.id}</td>
                <td>{item.site}</td>
                <td>{item.product_code}</td>
                <td>{item.style_index}</td>
                <td>{item.size}</td>
                <td>{item.billing_address_id}</td>
                <td>{item.shipping_address_id}</td>
                <td>{item.notification_email_address}</td>
            </tr>
            ))
          }
          </tbody>
          
        </table>
        </section>
      </section>
    </div>
  )
}

export default TasksTable