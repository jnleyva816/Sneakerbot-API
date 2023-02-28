import React from 'react';
import Navbar from '../../Navbar'
import './proxies.css'  
import ProxiesDelete from './ProxiesDelete';
import ProxiesForm from './ProxiesForm';
import ProxiesTable from './ProxiesTable';

const Proxies = () => {
  return (
    <div className='proxies'>
      <Navbar/>

      <h1 className='title'>Proxies</h1>
      <ProxiesTable/>
      <ProxiesForm/>
      <ProxiesDelete/>

    </div>
  );
};
  
export default Proxies;