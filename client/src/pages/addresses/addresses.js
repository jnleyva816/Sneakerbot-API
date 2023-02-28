import React from 'react';
import Navbar from '../../Navbar'
import './addresses.css'
import AddressForm from './AddressForm';
import AddressTable from './AddressTable';
import AddressesDelete from './AddressesDelete';




const Addresses = () => {

  

  return (
    <div className='addresses'>
      <Navbar/>
      <h1 className='title'>Addresses</h1>
      <AddressTable/>
      <AddressForm/>
      <AddressesDelete/>
    </div>
    
  );
};
  
export default Addresses;