import React from 'react';

import Sidebar from '../../Sidebar';
import './proxies.css'  
import ProxiesDelete from './ProxiesDelete';
import ProxiesForm from './ProxiesForm';
import ProxiesTable from './ProxiesTable';

const Proxies = () => {
  return (
    <div className='content' id="body">
      <Sidebar/>
      <h1 className='title'>Proxies</h1>
      <ProxiesTable/>
      <ProxiesForm/>
      <ProxiesDelete/>

    </div>
  );
};
  
export default Proxies;